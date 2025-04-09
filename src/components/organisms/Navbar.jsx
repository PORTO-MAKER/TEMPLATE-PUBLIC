import { getUser } from "@/utils";
import { NavbarClient } from ".";

const Navbar = async ({ host }) => {
    const datas = await getUser(host);

    return <NavbarClient account={datas} />;
};

export default Navbar;
