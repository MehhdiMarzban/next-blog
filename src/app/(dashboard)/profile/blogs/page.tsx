import { Suspense } from "react";
import { Pagination, Search, SuspenseFeedback } from "@/components/core";
import { BlogsTable, CreateBlogButton } from "@/components/ui/dashboard";
import AppTexts from "@/constants/appTexts";
import queryString from "query-string";
import { getTotalBlogsApi } from "@/services/blogs.service";

const BlogsPage: React.FC<{searchParams: Record<string, any>}> = async ({searchParams}) => {
    const query = queryString.stringify(searchParams);
    const totalPages = await getTotalBlogsApi(query);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-secondary-700 mb-12 items-center mx-auto">
                <h1 className="text-secondary-600 my-2 text-xl font-bold">{AppTexts.BLOGS}</h1>
                <Search />
                <CreateBlogButton />
            </div>
            <Suspense fallback={<SuspenseFeedback />} key={query}>
                <BlogsTable query={query} />
            </Suspense>
            <div className="mt-4 flex justify-center items-center overflow-auto">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    );
};

export default BlogsPage;
