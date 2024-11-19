interface Button {
    children?: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: "primary" | "outline" | "secondary" | "danger";
    type?: "submit" | "button" | "reset";
    className?: React.CSSProperties & string;
    disabled?: boolean;
}

export default Button;
