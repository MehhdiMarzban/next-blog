export default interface FileInput {
    label: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value?: any;
    dir?: "rtl" | "ltr";
    required?: boolean;
    className?: React.CSSProperties & string;
    errors? : any;
    accept?: Array<string>;
    onBlur? : () => void;
    rest: object;
}
