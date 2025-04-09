import { DetailsProjectClient } from "@/components/templates";
import { getUser, getDetailsProject } from "@/utils";
import { headers } from "next/headers";

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

const DetailsProjectPage = async ({ params }) => {
    const headersList = await headers();
    const host = headersList.get("host");
    const { id } = await params;

    const username = await getUser(host);
    const datas = await getDetailsProject(username.userData.username, id);

    return <DetailsProjectClient datas={datas} />;
};

export default DetailsProjectPage;
