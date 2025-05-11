import { GetAllProjectUserService } from "@/services";

export default async function sitemap() {
    const datas = await GetAllProjectUserService();

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
