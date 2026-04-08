import NextAuth from "next-auth";
import { authOptions } from "@/core/auth";

// 1. Initialize NextAuth with our options
const handler = NextAuth(authOptions);

// 2. ONLY use named exports for the methods Next.js expects
// This tells the server: "Use this handler for both GET and POST requests"
export { handler as GET, handler as POST };

// IMPORTANT: Do NOT add "export default handler" here.