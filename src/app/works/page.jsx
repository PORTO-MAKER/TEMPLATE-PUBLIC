import WorkClient from "./WorkClient";
import { GetAllProjectUserService } from "@/services";
import { getUser } from "@/utils";
import { headers } from "next/headers";

export const metadata = {
    title: "Works",
    description:
        "Here you will find all of the personal and clients works that I created with each project containing its own case study",
};

const Work = async () => {
    const headersList = await headers();
    const host = headersList.get("host");
    const username = await getUser(host);
    const datas = await GetAllProjectUserService(username.userData.username);

    return <WorkClient projects={datas} />;
};

export default Work;
