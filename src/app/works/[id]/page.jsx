import { getUser, getDetailsProject } from "@/utils";
import { headers } from "next/headers";
import DetailsWorkClient from "./DetailsWorkClient";

export const generateMetadata = async ({ params }) => {
    const headersList = await headers();
    const host = headersList.get("host");
    const { id } = await params;
    const username = await getUser(host);
    const datas = await getDetailsProject(username.userData.username, id);

    return {
        title: datas.name,
        description: datas.overview,
    };
};

const DetailsWork = async ({ params }) => {
    const headersList = await headers();
    const host = headersList.get("host");
    const { id } = await params;

    const username = await getUser(host);
    const datas = await getDetailsProject(username.userData.username, id);

    return <DetailsWorkClient datas={datas} />;
};

export default DetailsWork;
