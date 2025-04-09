import {
    GetDetailsProjectUserService,
    GetNameUserService,
    UserAccountService,
} from "@/services";
import { cache } from "react";

export const getUser = cache(async (host) => {
    const serverName = await GetNameUserService(host);
    const username = await UserAccountService(serverName);

    return username;
});

export const getDetailsProject = cache(async (username, id) => {
    const datas = await GetDetailsProjectUserService(username, id);

    return datas;
});
