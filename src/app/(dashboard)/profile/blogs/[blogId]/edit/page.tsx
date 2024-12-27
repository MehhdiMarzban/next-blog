import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/core";
import { CreateBlogForm } from "@/components/ui/dashboard";
import { getBreadCrumb } from "@/constants/breadCrumbs";
import { getBlogById } from "@/services/blogs.service";

const EditPage: React.FC<{ params: { blogId } }> = async ({ params: { blogId } }) => {
    const blog = await getBlogById(blogId);
    if (!blog) notFound();

    return (
        <>
            <Breadcrumb breadcrumbs={getBreadCrumb("profile_blogs_edit", blogId)} />
            <CreateBlogForm blogToEdit={blog} />
        </>
    );
};

export default EditPage;
