import AppTexts from "./appTexts";
import { BreadcrumbsType, BreadcrumbLinkType, BlogType } from "@/types";

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
    blogs_slug: (slug: BlogType["slug"]) => [
        {
            label: AppTexts.BLOGS,
            href: `/blogs`,
        },
        {
            label: slug,
            href: `/blogs/${slug}`,
        },
    ],
    profile_blogs,
    profile_blogs_create: [
        ...profile_blogs,
        {
            label: AppTexts.CREATE_NEW_BLOG,
            href: "/profile/blogs/create",
        },
    ],
    profile_blogs_edit: (blogId: BlogType["id"]) => [
        ...profile_blogs,
        {
            label: AppTexts.EDIT_BLOG,
            href: `/profile/blogs/${blogId}/edit`,
        },
    ],
} satisfies BreadcrumbsType;

type KeysType = "profile_blogs_edit" | "blogs_slug";
export const getBreadCrumb = (key: KeysType, data: BlogType["id"] | BlogType["slug"]) => {
    const breadcrumb = breadcrumbs[key];

    if (typeof breadcrumb === "function") {
        return breadcrumb(data);
    }

    return breadcrumb;
};

export default breadcrumbs;
