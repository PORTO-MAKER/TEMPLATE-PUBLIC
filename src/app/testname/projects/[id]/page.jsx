import DetailsProjectClient from "./DetailsProjectClient";
import { getDetailsProject } from "@/templates/testname/utils";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const datas = await getDetailsProject(id);

    return {
        title: datas.name,
        description: datas.overview,
    };
};

const DetailsProjectPage = async ({ params }) => {
    const { id } = await params;

    const datas = await getDetailsProject(id);

    return <DetailsProjectClient datas={datas} />;
};

export default DetailsProjectPage;
