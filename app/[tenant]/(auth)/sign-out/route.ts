import { NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";

export async function GET(request: Request) {
  const supabase = await getSupabaseCookiesUtilClient();

  // Sign out the user on the server side (clears cookies)
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error signing out:", error.message);
    return new NextResponse("Failed to sign out", { status: 500 });
  }

  // Redirect to homepage (or sign-in page if preferred)
  return NextResponse.redirect(new URL("/sign-in", request.url));
}
