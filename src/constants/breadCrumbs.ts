import AppTexts from "./appTexts";
import { BreadcrumbsType } from "@/types";

const profile_blogs: BreadcrumbsType[] = [
    {
        label: AppTexts.DASHBOARD,
        href: "/profile",
    },
    {
        label: AppTexts.BLOGS,
        href: "/profile/blogs",
    },
];

const breadcrumbs: { [key: string]: BreadcrumbsType[] } = {
    profile_blogs,
    profile_blogs_create: [
        ...profile_blogs,
        {
            label: AppTexts.CREATE_NEW_BLOG,
            href: "/profile/blogs/create",
        },
    ],
    profile_blogs_edit: [
        ...profile_blogs,
        {
            label: AppTexts.EDIT_BLOG,
            href: "/profile/blogs",
        },
    ],
};

export default breadcrumbs;
