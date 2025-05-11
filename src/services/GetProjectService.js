import { GET_DATA } from "../api";

export const GetAllProjectUserService = async () => {
    try {
        const response = await GET_DATA(`visitor/testbug/projects`);

        return response.data.data.userProjectData;
    } catch (err) {
        console.log(err);
    }
};

export const GetDetailsProjectUserService = async (id) => {
    try {
        const response = await GET_DATA(`visitor/testbug/projects/${id}`);
        return response.data.data;
    } catch (err) {
        console.log(err);
    }
};
