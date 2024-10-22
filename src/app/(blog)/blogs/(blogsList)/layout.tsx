import { Spinner } from "@/components/core";
import { CategoryList } from "@/components/ui";
import appTexts from "@/constants/appTexts";
import { Suspense } from "react";

const BlogListLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center justify-center">
                <h1 className="text-lg font-bold">{appTexts.BLOGS}</h1>
            </div>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12  lg:col-span-3 xl:col-span-2 space-y-4">
                    <Suspense fallback={<Spinner />}>
                        <CategoryList />
                    </Suspense>
                </div>
                <main className="col-span-12 lg:col-span-9 xl:col-span-10">{children}</main>
            </div>
        </section>
    );
};
export default BlogListLayout;
