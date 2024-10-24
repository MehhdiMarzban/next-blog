import { BlogType } from "@/types";
import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogs } from "@/services/blogs.service";
import { Metadata } from "next";

//* this is for disable or able to used dynamic params
export const dynamicParams = false;

//* this is for rebuild this page after on hour , rebuild = 1- pass the validate time 2- request for this page
export const revalidate = 3600;

//* Metadata Tags
export const generateMetadata = async ({
    params: { blogSlug },
}: {
    params: { blogSlug: string };
}): Promise<Metadata> => {
    const post: BlogType = await getBlogBySlug(blogSlug);
    if (!post) return {};
    return {
        title: post.title,
    };
};

//* StaticParams for generate static pages
export const generateStaticParams = async () => {
    const blogs = await getBlogs();
    return blogs.map((blog) => ({ blogSlug: blog.slug }));
};

const BlogPage: React.FC<{ params: { blogSlug: string } }> = async ({ params: { blogSlug } }) => {
    const post: BlogType = await getBlogBySlug(blogSlug);
    if (!post) {
        return notFound();
    }
    return <div>{post.title}</div>;
};

export default BlogPage;
