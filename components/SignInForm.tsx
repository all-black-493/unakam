'use client'

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface SigninFormProps {
    isPasswordLogin: boolean;
    onToggleLoginMethod: () => void;
}

export const SigninForm = ({ isPasswordLogin, onToggleLoginMethod }: SigninFormProps) => {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const supabase = getSupabaseBrowserClient();
    const router = useRouter();
    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_IN" && session?.user) {
                router.push("/events");
            }
        });
        return () => subscription.unsubscribe();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
            <Card className="w-full max-w-md shadow-xl">
                <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                        <Logo />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                        <CardDescription>
                            {isPasswordLogin
                                ? "Enter your credentials to access your account"
                                : "Enter your email to receive a magic link"
                            }
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent>
                    <form
                        action={isPasswordLogin ? "/pw-login" : "/magic-link"}
                        method="POST"
                        onSubmit={(event) => {
                            isPasswordLogin && event.preventDefault();
                            if (isPasswordLogin) {
                                supabase.auth.signInWithPassword({
                                    email: emailInputRef.current?.value ?? "",
                                    password: passwordInputRef.current?.value ?? "",
                                }).then((result) => {
                                    !result.data?.user && alert("Could not sign in");
                                });
                            } else {
                                alert("User wants to login with magic link");
                            }
                        }} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                autoComplete="email"
                                ref={emailInputRef}
                                className="w-full"
                            />
                        </div>

                        {isPasswordLogin && (
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                    autoComplete="current-password"
                                    ref={passwordInputRef}
                                    className="w-full"
                                />
                            </div>
                        )}

                        <Button type="submit" className="w-full">
                            {isPasswordLogin ? "Login with Password" : "Send Magic Link"}
                        </Button>

                        <div className="text-center">
                            <Button
                                type="button"
                                variant="link"
                                onClick={onToggleLoginMethod}
                                className="text-sm"
                            >
                                {isPasswordLogin
                                    ? "Login with Magic Link instead"
                                    : "Login with Password instead"
                                }
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};