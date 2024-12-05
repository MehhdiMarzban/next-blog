import { Breadcrumb } from "@/components/core";
import breadcrumbs from "@/constants/breadCrumbs";

const CreatePage : React.FC = () => {
    return <>
        <Breadcrumb breadcrumbs={breadcrumbs.profile_blogs_create} />
    </>
}

export default CreatePage;