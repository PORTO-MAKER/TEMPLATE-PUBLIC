import { Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/templates";
import { headers } from "next/headers";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
});

export async function generateMetadata() {
    const headersList = await headers();
    const host = headersList.get("host");
    return {
        title: {
            default: "Portfolio",
            template: "%s | Portfolio",
        },
        description:
            "Porto Maker is the best platform to build your professional online portfolio. Showcase your skills and projects with ease and stand out in the job market.",
        metadataBase: new URL(`https://${host}`),
        images: ["/opengraph-image.png"],
        icons: {
            icon: [
                { url: "/favicon.ico" },
                { url: "/icon.png", type: "image/png" },
            ],
            apple: [{ url: "/apple-icon.png" }],
        },
    };
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${poppins.className} antialiased`}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
