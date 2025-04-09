import {
    GetAllProjectUserService,
    GetNameUserService,
    UserAccountService,
} from "@/services";
import { headers } from "next/headers";

export default async function sitemap() {
    const headersList = await headers();
    const host = headersList.get("host");

    const serverName = await GetNameUserService(host);
    const username = await UserAccountService(serverName);
    const datas = await GetAllProjectUserService(username.userData.username);

    const projects = datas.map((data) => {
        return {
            url: `${serverName}/projects/${data._id}`,
        };
    });

    return [
        {
            url: `${serverName}`,
        },
        {
            url: `${serverName}/projects`,
        },
        ...projects,
    ];
}
