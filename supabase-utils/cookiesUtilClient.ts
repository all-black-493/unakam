import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const getSupabaseCookiesUtilClient = async () => {
    const cookieStore = await cookies();
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: {
            getAll(){
                return cookieStore.getAll();
            },
            setAll(cookiesToSet){
                try {
                    cookiesToSet.forEach(cookie => cookieStore.set(cookie.name, cookie.value, cookie.options));
                } catch (error) {
                    console.error("Error setting cookies:", error);
                }
            },
        } }
    );
};