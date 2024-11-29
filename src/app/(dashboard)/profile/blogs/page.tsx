import { SpinnerMini } from "@/components/core";
import { BlogsTable } from "@/components/ui/dashboard";
import { Suspense } from "react";

const BlogsPage: React.FC = () => {
    return (
        <Suspense fallback={<SpinnerMini />}>
            <BlogsTable />
        </Suspense>
    );
};

export default BlogsPage;
