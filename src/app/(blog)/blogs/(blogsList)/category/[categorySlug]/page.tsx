import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import queryString from "query-string";

import { BlogsList } from "@/components/ui";
import { getBlogsApi } from "@/services/blogs.service";
import { BlogType } from "@/types";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { BlogsLengthHandler } from "@/components/core";

const CategoryPage: React.FC<{
    params: { categorySlug: string };
    searchParams: { q: string };
}> = async ({ params, searchParams }) => {
    let blogs: BlogType[] = [];
    try {
        const queries =
            queryString.stringify(searchParams) + `&categorySlug=${params.categorySlug}`;
        const appCookies = cookies();
        const options = setCookiesOnReq(appCookies);
        blogs = await getBlogsApi(queries, options);
    } catch (error) {
        notFound();
    }
    return (
        <section>
            <BlogsLengthHandler search={searchParams.q} blogsLength={blogs.length} />
            {blogs.length > 0 && (
                <>
                    <h1 className="text-lg font-bold text-center bg-secondary-200 py-2 rounded-md mb-4">
                        {blogs[0]?.category?.title}
                    </h1>
                    <BlogsList blogs={blogs} />
                </>
            )}
        </section>
    );
};

export default CategoryPage;
