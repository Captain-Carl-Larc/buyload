// Import the response object to handle the redirect
import { NextResponse } from "next/server";
// Import the auth middleware wrapper
import { withAuth } from "next-auth/middleware";

// Main export of the auth-wrapped middleware function
export default withAuth(
  function proxy(req) {
    // 1. Get the session token from the request
    const token = req.nextauth.token;
    // 2. Identify if the current path is inside the /admin folder
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

    // 3. LOGIC: If they are trying to reach /admin but are NOT logged in at all
    if (isAdminRoute && !token) {
      // Send them to the "Gatehouse" to explain why they need an account
return NextResponse.redirect(new URL("/auth-choice", req.url));    }
    
    // NOTE: We have removed the role check from here! 
    // Anyone with a valid account can now enter the /admin zone.
    // 2. If they HAVE a token and are going to admin -> Let them through!
    return NextResponse.next();
  },
  {
    callbacks: {
      // Always trigger the middleware if the URL matches our config
      authorized: () => true, 
    },
  }
);

// Matcher configuration for Next.js
export const config = {
    matcher: ["/admin/:path*"],

};
