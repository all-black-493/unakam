import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { Toaster } from "@/components/ui/sonner"
import { Oxanium } from 'next/font/google'  // Using built-in next/font
import "./globals.css";

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-oxanium',
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Unakam?",
  description: "An Events Application",
  icons: {
    icon: "/favicon.ico",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <ThemeProvider attribute="class">
          {children}
          <Toaster
            richColors
            expand={true}
            toastOptions={{
              //There are two styles for double-protection
              className: "font-[--font-oxanium]",
              style: {
                fontFamily: 'var(--font-oxanium)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}