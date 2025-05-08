import { GetNameUserService } from "@/services";
import { headers } from "next/headers";

export default async function robots() {
    const headersList = await headers();
    const host = headersList.get("host");

    const serverName = await GetNameUserService(host);

    return {
        rules: [
            {
                userAgent: "*",
            },
        ],
        sitemap: `${serverName}/sitemap.xml`,
    };
}
