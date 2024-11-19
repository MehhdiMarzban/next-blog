import Image from "next/image";

const Avatar: React.FC<Readonly<{ width?: number; src?: string; alt?: string }>> = ({
    src = `/images/avatar.png`,
    width = 24,
    alt = "avatar",
}) => {
    return (
        <Image
            className="rounded-full ring-2 ring-secondary-400"
            alt={alt}
            src={src}
            width={width}
            height={width}
        />
    );
};

export default Avatar;
