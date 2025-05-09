export const handleButton = (setState) => {
    setState((state) => !state);
};

export const handleSubmitData = (data, postData, ...res) => {
    postData(data, ...res);
};
