import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";

import { BlogType } from "@/types";
import { Author, BlogInteractions, Button, CoverImage } from "@/components/core";
import appTexts from "@/constants/appTexts";

const BlogCard: React.FC<{ blog: BlogType }> = ({ blog }) => {
    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-0 rounded-lg shadow-md">
            <CoverImage src={blog.coverImageUrl} alt={blog.title} slug={blog.slug} />
            {/* blog Content */}
            <div>
                {/* blog Title */}
                <Link href={`/blogs/${blog.slug}`}>
                    <h2 className="font-bold text-secondary-700 my-2">{blog.title}</h2>
                </Link>

                {/* blog Author and ReadingTime */}
                <div className="flex items-center justify-between px-1">
                    {/* Author */}
                    <Author avatarUrl={blog.author.avatarUrl} name={blog.author.name} />

                    {/* ReadingTime */}
                    <div className="flex items-center text-[0.6rem] text-secondary-500 [&>svg]:h-5 [&>svg]:w-5">
                        <ClockIcon />
                        <span className="ml-1">{appTexts.READING}: </span>
                        <span className="ml-1 leading-3">{blog.readingTime}</span>
                        <span>{appTexts.MINUTES}</span>
                    </div>
                </div>
                {/* blogcard bottom */}
                <div className="flex flex-row justify-between items-end gap-x-1 mt-2">
                    <div className="p-1 flex-1"><BlogInteractions blog={blog}/></div>
                    <Link href={`/blogs/${blog.slug}`} className="flex-1 my-0">
                        <Button variant="secondary" className="py-1 w-full rounded-tl-none rounded-br-none rounded-bl-md">
                            {appTexts.READING}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
