import Image from "next/image";
import Link from "next/link";

const CoverImage: React.FC<Readonly<{ alt?: string; src: string , slug: string}>> = ({ alt = "", src, slug }) => {
    return (
        <Link href={`/blogs/${slug}`}>
            <div className="relative block aspect-video overflow-hidden rounded-md">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    quality={80}
                    className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
                />
            </div>
        </Link>
    );
};

export default CoverImage;
