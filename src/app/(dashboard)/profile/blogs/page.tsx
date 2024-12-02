import { Suspense } from "react";
import { Search, SuspenseFeedback } from "@/components/core";
import { BlogsTable, CreateBlogButton } from "@/components/ui/dashboard";
import AppTexts from "@/constants/appTexts";
import queryString from "query-string";

const BlogsPage: React.FC<{searchParams: Record<string, any>}> = ({searchParams}) => {
    const query = queryString.stringify(searchParams);
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
        </>
    );
};

export default BlogsPage;
