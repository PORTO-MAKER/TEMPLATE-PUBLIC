const Input = ({ id, register, addOptionError, variant, ...props }) => {
    return (
        <input
            id={id}
            className={`${
                variant
                    ? variant
                    : "w-full h-12 rounded-lg bg-zinc-100 dark:bg-white ring-1 ring-violet-500 p-3 focus:outline-none"
            } `}
            autoComplete="off"
            {...props}
            {...(register ? register(id, addOptionError) : {})}
        />
    );
};

export default Input;
