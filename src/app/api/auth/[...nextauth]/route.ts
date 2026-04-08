import NextAuth from "next-auth";
import { authOptions } from "@/core/auth";

const handler = NextAuth(authOptions);

// Named exports ONLY. Next.js 16/Turbopack will reject the file if "export default" exists.
export { handler as GET, handler as POST };