import { GET_DATA } from "../api";

export const UserAccountService = async (username) => {
    try {
        const response = await GET_DATA(`visitor/${username}`);
        return response.data.data;
    } catch (err) {
        console.log(err);
    }
};
