import Link from "next/link";
interface ErrorPageProps {
    searchParams: Record<string, string | undefined>;
}


export default function ErrorPage({ searchParams }: ErrorPageProps) {
    const { type } = searchParams;
    const knownErrors = ["login-failed", "missing-email", "invalid-email", "magic-link", "invalid-magic-link"];
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Oops!</h1>
            {type === "login-failed" && (
                <strong>Login was not successful, sorry.</strong>
            )}
            {type === "magic-link" && (
                <strong>
                    Could not send a magic link. Maybe you had a typo in your E-Mail?
                </strong>
            )}
            {type === "missing-email" && (
                <strong>Please enter your email address.</strong>
            )}
            {type === "invalid-email" && (
                <strong>
                    The email address you entered is invalid. Please check it and try again.
                </strong>
            )}
            {type === "invalid-magic-link" && (
                <strong>
                    The magic link is invalid or has expired. Please request a new one.
                </strong>
            )}
            {/* If the error type is not recognized, show a generic error message */}
            {!knownErrors.includes(type ?? "") && (
                <strong>
                    Something went wrong. Please try again or contact support.
                </strong>
            )}
            <br /><br />
            <Link role="button" href="/sign-in">
                Go back.
            </Link>
        </div>
    );
}