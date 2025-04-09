export const formatDate = (date) => {
    if (!date) return "present";
    const options = { year: "numeric", month: "short" };
    return new Date(date).toLocaleDateString("en-US", options);
};
