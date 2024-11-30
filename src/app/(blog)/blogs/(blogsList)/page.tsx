import { Suspense } from "react";
import { cookies } from "next/headers";
import queryString from "query-string";

import { BlogsLengthHandler, Empty, Spinner } from "@/components/core";
import { BlogsList } from "@/components/ui";
import AppTexts from "@/constants/appTexts";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { getBlogsApi } from "@/services/blogs.service";

const BlogsListPage: React.FC<{ searchParams: { q: string } }> = async ({ searchParams }) => {
    const queries = queryString.stringify(searchParams);
    const appCookies = cookies();
    const options = setCookiesOnReq(appCookies);
    const blogs = await getBlogsApi(queries, options);

    return (
        <section>
            <BlogsLengthHandler blogsLength={blogs.length} search={searchParams.q} />
            {blogs.length > 0 ? (
                <>
                    <h1 className="text-lg font-bold text-center bg-secondary-200 py-2 rounded-md mb-4">
                        {AppTexts.BLOG_LIST_PAGE}
                    </h1>
                    {/* we dont need anymore suspense because all fetch data be here and not in blogList */}
                    <Suspense fallback={<Spinner />}>
                        <BlogsList blogs={blogs} />
                    </Suspense>
                </>
            ) : (
                <Empty resourceName={AppTexts.BLOG_EMPTY} />
            )}
        </section>
    );
};

export default BlogsListPage;
