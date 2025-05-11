const Textarea = ({ id, register, addOptionError, variant, ...props }) => {
    return (
        <textarea
            id={id}
            className={`${
                variant
                    ? variant
                    : "w-full h-64 rounded-lg bg-zinc-100 dark:bg-white ring-1 ring-violet-500 p-3 resize-none focus:outline-none"
            } `}
            autoComplete="off"
            {...props}
            {...(register ? register(id, addOptionError) : {})}
        />
    );
};

export default Textarea;
