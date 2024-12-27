import AppTexts from "./appTexts";
import { BreadcrumbsType, BreadcrumbLinkType } from "@/types";

const profile_blogs: BreadcrumbLinkType[] = [
    {
        label: AppTexts.DASHBOARD,
        href: "/profile",
    },
    {
        label: AppTexts.BLOGS,
        href: "/profile/blogs",
    },
];

const breadcrumbs = {
    profile_blogs,
    profile_blogs_create: [
        ...profile_blogs,
        {
            label: AppTexts.CREATE_NEW_BLOG,
            href: "/profile/blogs/create",
        },
    ],
    profile_blogs_edit: (blogId: string) => [
        ...profile_blogs,
        {
            label: AppTexts.EDIT_BLOG,
            href: `/profile/blogs/${blogId}/edit`,
        },
    ],
} satisfies BreadcrumbsType;

type KeysType = "profile_blogs_edit";
export const getBreadCrumb = (key: KeysType, blogId: string) => {
    const breadcrumb = breadcrumbs[key];

    if (typeof breadcrumb === "function") {
        return breadcrumb(blogId);
    }

    return breadcrumb;
};

export default breadcrumbs;
