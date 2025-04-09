import { Input, Label, Errors, Textarea } from "../atoms";

const InputForm = ({
    labelText,
    labelStyle,
    id,
    errors,
    register,
    addOptionError,
    inputStyle,
    type,
    ...props
}) => {
    return (
        <div className="flex flex-col w-full gap-1">
            <Label htmlFor={id} variant={labelStyle}>
                {labelText}
            </Label>
            {type === "text" || type === "email" ? (
                <Input
                    id={id}
                    register={register}
                    addOptionError={addOptionError}
                    variant={inputStyle}
                    {...props}
                />
            ) : type === "textarea" ? (
                <Textarea
                    id={id}
                    register={register}
                    addOptionError={addOptionError}
                    variant={inputStyle}
                    {...props}
                />
            ) : null}
            {errors && (
                <Errors className="text-sm text-red-500">
                    {errors.message}
                </Errors>
            )}
        </div>
    );
};

export default InputForm;
