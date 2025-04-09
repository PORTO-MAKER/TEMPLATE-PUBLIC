import axios from "axios";

const instance = axios.create({
    withCredentials: true,
});

export const GET_DATA = async (endpoint) => {
    const response = await instance.get(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE}/${endpoint}`
    );
    return response;
};

export const POST_DATA = async (endpoint, data, header) => {
    const response = await instance.post(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE}/${endpoint}`,
        data,
        header
            ? header
            : {
                  headers: {
                      "Content-Type": "application/json",
                  },
              }
    );
    return response;
};
