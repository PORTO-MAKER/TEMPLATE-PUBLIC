"use client";

import { useForm } from "react-hook-form";
import { InputForm } from "@/templates/testname/components/molecules";
import { Button } from "@/templates/testname/components/atoms";
import { gridClass } from "@/templates/testname/utils";

const Form = ({
    dataForm,
    handleSubmitData,
    buttonName,
    buttonStyle,
    loading,
    formStyle,
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    return (
        <form
            onSubmit={handleSubmit((data) => handleSubmitData(data, reset))}
            className={
                formStyle
                    ? `${formStyle} grid grid-cols-12`
                    : "p-10 space-y-5 grid grid-cols-12"
            }
        >
            {dataForm?.map((data, index) => (
                <div key={index} className={`relative ${gridClass(data.grid)}`}>
                    {data.jenisInputan === "input" ? (
                        <InputForm
                            labelText={data.title}
                            labelStyle={data.labelStyle}
                            inputStyle={data.inputStyle}
                            id={data.name}
                            type={data.type}
                            placeholder={data.placeholder}
                            register={register}
                            addOptionError={data.addOptionError}
                            errors={errors[data.name]}
                        />
                    ) : null}
                </div>
            ))}
            <div className="flex justify-center lg:justify-end w-full col-span-12">
                <Button type="submit" variant={buttonStyle} disable={loading}>
                    {buttonName}
                </Button>
            </div>
        </form>
    );
};

export default Form;
