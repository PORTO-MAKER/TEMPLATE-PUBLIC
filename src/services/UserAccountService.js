import { GET_DATA } from "../api";

export const UserAccountService = async () => {
    try {
        const response = await GET_DATA(`visitor/testbug`);
        return response.data.data;
    } catch (err) {
        console.log(err);
    }
};
