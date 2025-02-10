import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/global.scss";
import { Toaster } from "react-hot-toast";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Поиск эндер крепости by prmak",
    description:
        "С помощью данного калькулятора вы сможете высчитать координаты крепости с порталом в энд, сделав всего два броска ока края.",
    keywords: [
        "Поиск эндер крепости",
        "эндер крепость",
        "генератор эндер крепости",
        "расчет координат эндер крепости",
        "нахождение эндер крепости",
        "найти портал в энд",
    ],

    openGraph: {
        title: "Калькулятор для поиска крепости Края",
        description:
            "С помощью данного калькулятора вы сможете высчитать координаты крепости с порталом в энд, сделав всего два броска ока края.",
        images: [
            {
                url: "/Ender_Dragon.webp",
                width: 1200,
                height: 630,
                alt: "Ender Dragon",
            },
        ],
        url: "https://find-ender.netlify.app",
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
    },
    themeColor: "#171717;",
    verification: {
        google: "wXVKi1SRwVvba-IUro83DJxuW42YVU1EtfzROGDfPh8",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${inter.variable}`}>
                <Toaster position="top-right" />
                {children}
            </body>
        </html>
    );
}
