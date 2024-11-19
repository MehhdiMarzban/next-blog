import { ButtonType } from "@/types";

const btnType = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
    danger: "btn--danger",
};

function Button({ children, onClick, variant = "primary", className, type="button", disabled = false , ...rest }: Readonly<ButtonType>) {
    return (
        <button onClick={onClick} disabled={disabled} className={`btn ${btnType[variant]} ${className}`} type={type} {...rest}>
            {children}
        </button>
    );
}

export default Button;
