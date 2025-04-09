import { getUser } from "@/utils";
import { FooterClient } from ".";

const Footer = async ({ host }) => {
    const datas = await getUser(host);

    return <FooterClient account={datas} />;
};

export default Footer;
