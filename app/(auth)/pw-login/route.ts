import { NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
export async function POST(request: Request) {
    // Step 1:
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
        return NextResponse.redirect(
            new URL("/error?type=missing-credentials", request.url),
            { status: 302 }
        );
    }

    // Step 2:
    const supabase = await getSupabaseCookiesUtilClient();
    // Step 3:
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    // Step 4:
    const userData = data?.user;
    if (error || !userData) {
        return NextResponse.redirect(
            new URL("/error?type=login-failed", request.url),
            { status: 302 }
        );
    }
    return NextResponse.redirect(new URL("/events", request.url), {
        status: 302,
    });
}
