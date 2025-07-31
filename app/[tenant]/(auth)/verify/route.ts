import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const hashed_token = searchParams.get("hashed_token");
    const type = searchParams.get("type");

    const supabase = await getSupabaseCookiesUtilClient();

    if (!hashed_token) {
        throw new Error("Missing hashed_token in query parameters.");
    }

    const { error } = await supabase.auth.verifyOtp({
        type: "magiclink",
        token_hash: hashed_token,
    });

    if (error) {
        console.error("Magic link verification failed:", error.message);
        return NextResponse.redirect(
            new URL("/error?type=invalid-magic-link", request.url)
        );
    }

    // Redirect based on the type param after successful verification
    if (type === "recovery") {
        return NextResponse.redirect(
            new URL("/reset-password", request.url)
        );
    } else {
        return NextResponse.redirect(new URL("/events", request.url));
    }
}
