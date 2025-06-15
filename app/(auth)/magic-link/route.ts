import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const formData = await request.formData();
    const email = formData.get("email");
    const supabaseAdmin = getSupabaseAdminClient();
    const { data: linkData, error: adminError } =
        await supabaseAdmin.auth.admin.generateLink({
            email: email as string,
            type: "magiclink"
        });

    if (!email) {
        console.error("Missing email in form data");
        return NextResponse.redirect(
            new URL("/error?type=missing-email", request.url),
            302
        );
    }

    if (typeof email !== "string") {
        console.error("Invalid email type:", typeof email);
        return NextResponse.redirect(
            new URL("/error?type=invalid-email", request.url),
            302
        );
    }

    if (adminError) {
        console.error("Error generating magic link:", adminError);
        return NextResponse.redirect(
            new URL("/error?type=magic-link", request.url),
            302
        );
    }

    const { hashed_token } = linkData.properties;

    const constructedLink = new URL(
        `/auth/verify?hashed_token=${hashed_token}&type=recovery`,
        request.url
    );

    const transporter = nodemailer.createTransport({
        host: "localhost",
        port: 54334,
    });

    await transporter.sendMail({
        from: "Example Company <example@mail.whatever>",
        to: email,
        subject: "Magic Link",
        html: `
            <h1>Hi there, this is a custom magic link email!</h1>
            <p>Click <a href="${constructedLink.toString()}">here</a> to log in.</p>
            <p>If you did not request this email, please ignore it.</p>
            <p>Thank you!</p>
        `,
    });

    const thanksUrl = new URL("/magic-thanks", request.url);

    return NextResponse.redirect(thanksUrl, 302);
}