// 1. Import the configuration type to keep our options valid
import { NextAuthOptions } from "next-auth";
// 2. Import the adapter to bridge Auth.js with your PostgreSQL database
import { PrismaAdapter } from "@next-auth/prisma-adapter";
// 3. Import the Credentials provider (the 'manual' email/pass login)
import CredentialsProvider from "next-auth/providers/credentials";
// 4. Import the singleton database assistant we set up earlier
import { db } from "@/core/db";
// 5. Import bcrypt to verify the encrypted passwords
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  // LINK: Use the Prisma adapter to check for users in your database
  adapter: PrismaAdapter(db as any), 

  // STRATEGY: Use JSON Web Tokens (JWT)
  // This is the fastest way for your PC-only CMS to verify who is logged in
  session: {
    strategy: "jwt",
  },

  // PROVIDER: Only one entry point—the email/password form
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // A. Validation: If the form is empty, stop here
        if (!credentials?.email || !credentials?.password) return null;

        // B. Lookup: Query your PostgreSQL 'User' table for the provided email
        const user = await db.user.findUnique({
          where: { email: credentials.email }
        });

        // C. Existence Check: If no user found, deny access
        // We removed the OAuth/Password check here since we ONLY use passwords now
        if (!user) return null;
        // 2. Check if user.password is actually a string (not null)
// This "if" block clears the TypeScript error for the lines below
if (!user || !user.password) {
  return null; 
}
        // D. Verification: Use bcrypt to compare the typed password with the hashed one
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        // E. Result: If match, return the user; if not, return null (Access Denied)
        if (!isPasswordCorrect) return null;

        return user;
      }
    })
  ],

  // CALLBACKS: Stamping user roles onto the session 'passport'
  callbacks: {
    async jwt({ token, user }) {
      // Runs only when the user logs in for the first time
      if (user) {
        token.role = (user as any).role; // Attach 'ADMIN' or 'EDITOR' to the token
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Makes the role visible to your Sidebar and Page components
      if (token && session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    }
  },

  // REDIRECTS: Pointing the default login behavior to your custom gatehouse
  pages: {
    signIn: "/admin-access",
  }
};