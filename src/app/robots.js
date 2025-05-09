import { headers } from "next/headers";

export default async function robots() {
    const headersList = await headers();
    // const host = headersList.get("host");
    const host = "testbug.portoku.live";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],

        sitemap: `https://${host}/sitemap.xml`,
    };
}
