import { ProjectClient } from "@/components/templates";
import { GetAllProjectUserService } from "@/services";
import { getUser } from "@/utils";
import { headers } from "next/headers";

export const metadata = {
    title: "Projects",
    description:
        "Here you will find all of the personal and clients projects that I created with each project containing its own case study",
};

const ProjectPage = async () => {
    const headersList = await headers();
    const host = headersList.get("host");
    const username = await getUser(host);
    const datas = await GetAllProjectUserService(username.userData.username);

    return <ProjectClient datas={datas} />;
};

export default ProjectPage;
