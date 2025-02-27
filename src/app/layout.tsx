import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/global.scss";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Калькулятор поиска эндер-крепости в Minecraft",
    description:
        "Высчитайте точные координаты портала в энд с нашим калькулятором эндер-крепостей Minecraft. Всего два броска ока Края – и крепость найдена!",
    keywords: [
        "поиск эндер крепости",
        "эндер крепость",
        "генератор эндер крепости",
        "расчет координат эндер крепости",
        "нахождение эндер крепости",
        "найти портал в энд",
        "поиск эндер крепости Minecraft",
        "где найти крепость Края",
        "эндер крепость координаты",
        "как найти эндер крепость",
        "расчет крепости энд",
        "портал в Край координаты",
        "эндер крепость калькулятор",
        "minecraft stronghold finder",
        "minecraft end portal calculator",
        "найти эндер портал",
        "как найти эндер мир",
        "калькулятор энд",
        "калькулятор эндер крепости",
        "калькулятор эндер крепости майнкрафт",
    ],
    openGraph: {
        title: "Калькулятор поиска эндер-крепости в Minecraft",
        description:
            "Высчитайте точные координаты портала в энд с нашим калькулятором эндер-крепостей Minecraft. Всего два броска ока Края – и крепость найдена!",
        images: [
            {
                url: "/Ender_Dragon.webp",
                width: 1200,
                height: 630,
                alt: "Ender Dragon",
            },
        ],
        url: "https://find-ender.vercel.app",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Калькулятор поиска эндер-крепости в Minecraft",
        description:
            "Высчитайте точные координаты портала в энд с нашим калькулятором эндер-крепостей Minecraft. Всего два броска ока Края – и крепость найдена!",
        images: ["/Ender_Dragon.webp"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico",
    },
    robots: {
        index: true,
        follow: true,
    },
    themeColor: "#171717",
    verification: {
        google: "wXVKi1SRwVvba-IUro83DJxuW42YVU1EtfzROGDfPh8",
    },
    alternates: {
        canonical: "https://find-ender.vercel.app",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=G-XBHX3LZNW7`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`                      
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-XBHX3LZNW7');`}
                </Script>
            </head>
            <body className={`${inter.variable}`}>
                <Toaster position="top-right" />
                {children}
            </body>
        </html>
    );
}
