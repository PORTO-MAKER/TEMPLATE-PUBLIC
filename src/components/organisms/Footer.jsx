import { FooterClientOne, FooterClientTwo } from ".";

const number = 2;

const Footer = async ({ datas }) => {
    return number === 1 ? (
        <FooterClientOne account={datas} />
    ) : (
        <FooterClientTwo account={datas} />
    );
};

export default Footer;
