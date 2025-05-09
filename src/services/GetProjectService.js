import { GET_DATA } from "../api";

export const GetAllProjectUserService = async (username) => {
    try {
        const response = await GET_DATA(`visitor/${username}/projects`);

        return response.data.data.userProjectData;
    } catch (err) {
        console.log(err);
    }
};

export const GetDetailsProjectUserService = async (username, id) => {
    try {
        const response = await GET_DATA(`visitor/${username}/projects/${id}`);
        return response.data.data;
    } catch (err) {
        console.log(err);
    }
};
