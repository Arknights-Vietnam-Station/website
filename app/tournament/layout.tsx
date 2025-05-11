import NavBar from "@/components/NavBar";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";

import "../globals.css";

const jbMono = JetBrains_Mono({
    variable: "--font-jb-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://a9vns.giabao06.xyz"),
    title: "Dreamchasers @ 2025 🔥",
    description: "From VNS Dev Squad with love ❤️️",
    authors: [
        {
            name: "Trạm dừng chân chốn Terra",
            url: "https://www.facebook.com/terrastationvn",
        },
    ],
    openGraph: {
        images: [
            {
                url: "https://a9vns.giabao06.xyz/VNS_Banner.png",
                alt: "VNS banner",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
};

export const viewport: Viewport = {
    colorScheme: "only light",
    initialScale: 1.0,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang={"en"}>
            <body className={`${jbMono.variable} antialiased overflow-hidden`}>
                <NavBar />
                <div
                    className={
                        "block min-h-screen max-w-screen items-center justify-center font-[family-name:var(--font-jb-mono)]"
                    }
                >
                    {children}
                </div>
            </body>
        </html>
    );
}
