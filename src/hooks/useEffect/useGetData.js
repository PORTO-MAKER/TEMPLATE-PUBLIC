"use client";

import { useEffect } from "react";

export const useGetDataValidatorEffect = (
    service,
    setDatas,
    setLoading,
    validator,
    ...props
) => {
    useEffect(() => {
        if (validator) {
            service(setDatas, setLoading, validator, ...props);
        }
    }, [validator]);
};
