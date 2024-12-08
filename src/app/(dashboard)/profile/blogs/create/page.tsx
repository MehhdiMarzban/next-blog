import { Breadcrumb } from "@/components/core";
import { CreateBlogForm } from "@/components/ui/dashboard";
import breadcrumbs from "@/constants/breadCrumbs";

const CreatePage : React.FC = () => {
    return <>
        <Breadcrumb breadcrumbs={breadcrumbs.profile_blogs_create} />
        <CreateBlogForm />
    </>
}

export default CreatePage;