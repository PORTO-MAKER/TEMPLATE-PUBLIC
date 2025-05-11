export default async function robots() {
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
