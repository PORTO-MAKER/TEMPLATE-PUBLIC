import {
    GetAllProjectUserService,
    GetNameUserService,
    UserAccountService,
} from "@/services";
import { headers } from "next/headers";

export default async function sitemap() {
    const headersList = await headers();
    // const host = headersList.get("host");
    const host = "testbug.portoku.live";

    const serverName = await GetNameUserService(host);
    const username = await UserAccountService(serverName);
    const datas = await GetAllProjectUserService(username.userData.username);

    const projects = datas.map((data) => {
        return {
            url: `https://${host}/projects/${data._id}`,
        };
    });

    return [
        {
            url: `https://${host}`,
        },
        {
            url: `https://${host}/projects`,
        },
        ...projects,
    ];
}
