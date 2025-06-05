import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { Toaster } from "@/components/ui/sonner"
import { Oxanium } from 'next/font/google'
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${oxanium.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster richColors expand={true} />
        </ThemeProvider>
      </body>
    </html>
  );
}