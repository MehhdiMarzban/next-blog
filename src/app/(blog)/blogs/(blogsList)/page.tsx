import { Suspense } from "react";

import { Spinner } from "@/components/core";
import { BlogsList } from "@/components/ui";
import appTexts from "@/constants/appTexts";

const BlogsListPage: React.FC = () => {
    return (
        <section>
            <h1 className="text-lg font-bold text-center bg-secondary-200 py-2 rounded-md mb-4">{appTexts.BLOG_LIST_PAGE}</h1>
            <Suspense fallback={<Spinner />}>
                <BlogsList />
            </Suspense>
        </section>
    );
};

export default BlogsListPage;
