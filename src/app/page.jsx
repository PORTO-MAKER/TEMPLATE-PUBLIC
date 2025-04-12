import { HomeClient } from "@/components/templates";
import { getUser } from "@/utils";
import { headers } from "next/headers";

export const generateMetadata = async () => {
    const headersList = await headers();
    const host = headersList.get("host");
    const datas = await getUser(host);

    return {
        title: {
            default: `${datas.userData.name} | Portfolio`,
            template: `%s | Portfolio`,
        },
        description: datas.userDetailData.overview,
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        images: ["/opengraph-image.png"],
    };
};

const Home = async () => {
    const headersList = await headers();
    const host = headersList.get("host");

    const datas = await getUser(host);

    return <HomeClient account={datas} />;
};

export default Home;
