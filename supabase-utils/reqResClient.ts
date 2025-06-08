import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const getSupabaseReqResClient = async ({request}: {request: Request}) => {
    const cookieStore = await cookies();

    let response = {
        value: NextResponse.next({request:request})
    };

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll(){
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet){
                    try{
                        cookiesToSet.forEach(({name, value, options}) => {
                            cookieStore.set(name, value);
                        });
                        response.value = NextResponse.next({
                            request,
                        });
                        cookiesToSet.forEach(({name, value, options}) => {
                            response.value.cookies.set(name, value, options);
                        });
                    } catch (error) {
                        console.error(error);
                    }
                },
                removeAll(){
                    cookieStore.getAll().forEach((cookie) => {
                        cookieStore.delete(cookie.name)
                    })
                }
            }
        }
    );

    return {supabase, response};
};