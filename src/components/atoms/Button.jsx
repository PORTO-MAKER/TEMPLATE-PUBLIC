const Button = ({ variant, children, disable, onClick, type, ...props }) => {
    return (
        <button
            type={type}
            className={`${
                variant
                    ? variant
                    : "bg-violet-500 px-4 py-3 font-semibold text-white rounded-md cursor-pointer disabled:bg-violet-800 disabled:cursor-not-allowed"
            } `}
            disabled={disable}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
