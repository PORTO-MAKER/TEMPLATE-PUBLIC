const Label = ({ htmlfor, children, variant, ...props }) => {
    return (
        <label htmlFor={htmlfor} className={variant} {...props}>
            {children}
        </label>
    );
};

export default Label;
