import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { BlogType } from "@/types";
import { getBlogBySlugApi, getBlogsApi } from "@/services/blogs.service";
import { BlogComments, BlogInteractions, Breadcrumb, CoverImage, RelatedBlogs } from "@/components/core";
import breadcrumbs, { getBreadCrumb } from "@/constants/breadCrumbs";

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
    const post: BlogType = await getBlogBySlugApi(blogSlug, {});
    if (!post) return {};
    return {
        title: post.title,
    };
};

//* StaticParams for generate static pages
export const generateStaticParams = async () => {
    const blogs = await getBlogsApi("");
    return blogs.map((blog) => ({ blogSlug: blog.slug }));
};

const BlogPage: React.FC<{ params: { blogSlug: string } }> = async ({ params: { blogSlug } }) => {
    const appCookies = cookies();
    const options = setCookiesOnReq(appCookies);
    const blog: BlogType = await getBlogBySlugApi(blogSlug, options);

    if (!blog) {
        return notFound();
    }

    return (
        <div className="bg-secondary-100 rounded-md py-4 px-2">
            <Breadcrumb breadcrumbs={getBreadCrumb("blogs_slug", blogSlug)} />
            <h1 className="bg-secondary-200 text-secondary-600 rounded-md my-2 text-center py-4 text-2xl font-bold">
                {blog.title}
            </h1>
            <div className="max-w-xl mx-auto space-y-1">
                <CoverImage src={blog.coverImageUrl} alt={blog.title} slug={blog.slug} />
                <BlogInteractions blog={blog} />
            </div>
            <p className="mt-2 text-justify bg-secondary-50 text-secondary-500 p-2 rounded-md">
                {blog.text}
            </p>
            <br />
            {blog.related.length > 0 && <RelatedBlogs blogs={blog.related} />}
            <BlogComments blog={blog} />
        </div>
    );
};

export default BlogPage;
