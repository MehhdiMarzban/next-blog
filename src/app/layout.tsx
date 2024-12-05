import type { Metadata } from "next";
import AppFont from "@/constants/localFonts";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import appTexts from "@/constants/appTexts";
import { AuthProvider } from "@/contexts/auth.context";

export const metadata: Metadata = {
    title: {
        default: appTexts.APP_TITLE,
        template: `${appTexts.APP_TITLE} | %s`,
        // absolute: ""
    },
    description: appTexts.APP_SUBTITLE_1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" >
            <body className={`${AppFont.variable} font-sans min-h-screen`}>
                <AuthProvider>
                    <Toaster />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
