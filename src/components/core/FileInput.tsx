import { FileInputProps } from "@/types/props";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

const FileInput: React.FC<FileInputProps> = ({
    className,
    value,
    dir = "rtl",
    label,
    name,
    onChange,
    required = false,
    errors,
    accept,
    rest,
}) => {
    return (
        <div>
            <label
                htmlFor="file-upload"
                className={`cursor-pointer border-2 border-primary-900 rounded-lg px-3 py-2 text-primary-900 flex items-center justify-center gap-x-2 ${className}`}>
                {label} {required && <span className="text-error">*</span>}
                <ArrowUpTrayIcon className="w-5 h-5" />
                <input
                    type="file"
                    className="sr-only hidden"
                    id="file-upload"
                    name={name}
                    dir={dir}
                    value={value}
                    onChange={onChange}
                    accept={accept?.join(",")}
                    {...rest}
                />
            </label>
            {errors?.[name] && (
                <span className="text-red-600 block text-xs mt-2">{errors[name]?.message}</span>
            )}
        </div>
    );
};

export default FileInput;
