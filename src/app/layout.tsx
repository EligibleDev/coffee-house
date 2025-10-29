import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: ["700"],
});

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Coffee House - We have everything to refresh you",
    description: "Get the most fresh brew right from your bed.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${jost.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
