export default function RHFTextField({
    type = "text",
    label,
    name,
    dir = "rtl",
    register,
    errors,
    isRequired=false,
    validationSchema = {},
    ...rest
}) {
    const errorMessages = errors?.[name];
    const hasError = !!(errors && errorMessages);
    return (
        <div className={`textField relative ${hasError ? "textField--invalid" : ""}`}>
            <label htmlFor={name} className="mb-2 block text-secondary-700">
            {label} {isRequired && <span className="text-red-600">*</span>}
            </label>
            <input
                autoComplete="off"
                type={type}
                id={name}
                dir={dir}
                className={`textField__input  ${dir === "ltr" ? "text-left" : "text-right"}`}
                {...register(name, validationSchema)}
                {...rest}
            />
            {errors?.[name] && (
                <span className="text-red-600 block text-xs mt-2">{errors[name]?.message}</span>
            )}
        </div>
    );
}
