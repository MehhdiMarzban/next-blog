import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";

import { BlogType } from "@types";
import { Author, BlogInteractions, Button, CoverImage } from "@/components/core";
import appTexts from "@/constants/appTexts";

const BlogCard: React.FC<{ post: BlogType }> = ({ post }) => {
    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg">
            <CoverImage src={post.coverImageUrl} alt={post.title} slug={post.slug} />
            {/* Post Content */}
            <div>
                {/* Post Title */}
                <Link href={`/blogs/${post.slug}`}>
                    <h2 className="font-bold text-secondary-700 my-2">{post.title}</h2>
                </Link>

                {/* Post Author and ReadingTime */}
                <div className="flex items-center justify-between">
                    {/* Author */}
                    <Author avatarUrl={post.author.avatarUrl} name={post.author.name} />

                    {/* ReadingTime */}
                    <div className="flex items-center text-[0.6rem] text-secondary-500 [&>svg]:h-5 [&>svg]:w-5">
                        <ClockIcon />
                        <span className="ml-1">{appTexts.READING}: </span>
                        <span className="ml-1 leading-3">{post.readingTime}</span>
                        <span>{appTexts.MINUTES}</span>
                    </div>
                </div>
                {/* Post Interactions */}
                <BlogInteractions post={post} />
                <Link href={`/blogs/${post.slug}`}>
                    <Button variant="secondary" className="w-4/5 py-1 mx-auto mt-2">
                        {appTexts.READING}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
