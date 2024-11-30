import { SuspenseFeedback } from "@/components/core";
import { BlogsTable } from "@/components/ui/dashboard";
import { Suspense } from "react";

const BlogsPage: React.FC = () => {
    return (
        <Suspense fallback={<SuspenseFeedback />}>
            <BlogsTable />
        </Suspense>
    );
};

export default BlogsPage;
