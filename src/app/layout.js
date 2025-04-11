import { Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/templates";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
});

export const metadata = {
    title: {
        default: "Portfolio",
        template: "%s | Portfolio",
    },
    description:
        "Porto Maker is the best platform to build your professional online portfolio. Showcase your skills and projects with ease and stand out in the job market.",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    openGraph: {
        title: `${datas.userData.name} | Portfolio`,
        description: datas.userDetailData.overview,
        images: [`https://${host}/opengraph-image`],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${poppins.className} antialiased`}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
