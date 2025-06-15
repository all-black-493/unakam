import { NextRequest, NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";

export default async function middleware(request: NextRequest) {
    /**
     * Middleware for handling authentication and route protection.
     * - Redirects unauthenticated users to sign-in page
     * - Redirects authenticated users from homepage to /events
     * - Allows access to protected routes for authenticated users
     */
    const { supabase, response } = await getSupabaseReqResClient({ request });
    const { data: { user } } = await supabase.auth.getUser();
    const requestedPath = request.nextUrl.pathname;

    console.log("Middleware triggered for path:", requestedPath );
    console.log("User:", user);


    if (!user && !requestedPath.includes("/magic-link") && !requestedPath.includes("/magic-thanks")) {
        const loginUrl = new URL("/sign-in", request.url);
        return NextResponse.redirect(loginUrl);
    }

    if (requestedPath === "/") {
        return NextResponse.redirect(new URL("/events", request.url));
    }

    return response.value;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|sign-up|reset-password).*)"],
};