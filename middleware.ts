import { NextRequest, NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";

export default async function middleware(request: NextRequest) {
    const { supabase, response } = await getSupabaseReqResClient({ request });
    const session = await supabase.auth.getUser();
    const requestedPath = request.nextUrl.pathname;
    const sessionUser = session.data.user;

    if (requestedPath.includes("/events")) {
        if(!sessionUser) {
            return NextResponse.redirect(new URL("/sign-in", request.url));
        }
    }

    if (requestedPath === "/") {
        if(sessionUser){
            return NextResponse.redirect(new URL("/events", request.url));
        }
    }

    return response.value;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|sign-up|reset-password).*)"],
};