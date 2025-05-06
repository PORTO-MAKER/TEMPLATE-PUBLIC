import { NavbarClientOne, NavbarClientTwo } from ".";

const number = 2;

const Navbar = async ({ datas }) => {
    return number === 1 ? (
        <NavbarClientOne account={datas} />
    ) : (
        <NavbarClientTwo account={datas} />
    );
};

export default Navbar;
