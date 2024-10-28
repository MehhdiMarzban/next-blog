import { Suspense } from "react";
import { cookies } from "next/headers";

import { Spinner } from "@/components/core";
import { BlogsList } from "@/components/ui";
import appTexts from "@/constants/appTexts";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { getBlogsApi } from "@/services/blogs.service";

const BlogsListPage: React.FC = async () => {
    const appCookies = cookies();
    const options = setCookiesOnReq(appCookies);
    const blogs = await getBlogsApi(options);
    return (
        <section>
            <h1 className="text-lg font-bold text-center bg-secondary-200 py-2 rounded-md mb-4">{appTexts.BLOG_LIST_PAGE}</h1>
            {/* we dont need anymore suspense because all fetch data be here and not in blogList */}
            <Suspense fallback={<Spinner />}>
                <BlogsList blogs={blogs}/>
            </Suspense>
        </section>
    );
};

export default BlogsListPage;
