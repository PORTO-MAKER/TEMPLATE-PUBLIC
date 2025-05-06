import ContactClient from "./ContactClient";
import { headers } from "next/headers";
import { getUser } from "@/utils";

const Contact = async () => {
    const headersList = await headers();
    const host = headersList.get("host");

    const datas = await getUser(host);

    return <ContactClient account={datas} />;
};

export default Contact;
