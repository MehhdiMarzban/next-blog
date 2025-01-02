"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createCommentApi } from "@/services/comments.service";
import { BlogType, CommentType } from "@/types";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { deleteBlogApi } from "@/services/blogs.service";

export const createCommentAction = async (
    prevState,
    {
        blogId,
        parentId,
        formData,
    }: { blogId: BlogType["id"]; parentId: CommentType["user"]["_id"]; formData: FormData }
) => {
    const appCookies = cookies();
    const requestOptions = setCookiesOnReq(appCookies);

    const rawFormData = {
        parentId,
        postId: blogId,
        text: formData.get("text"),
    };

    try {
        const {
            data: { message },
        } = await createCommentApi(rawFormData, requestOptions);
        revalidatePath("/blogs/[slug]", "page");
        return { message };
    } catch (e: any) {
        const errorMessage: string = e?.response?.data?.message || "";
        return { errorMessage };
    }
};

export const deleteBlogAction = async (
    prevState,
    { blogId, formData }: { blogId: BlogType["id"]; formData: FormData }
) => {
    //* get and set cookies
    const appCookies = cookies();
    const requestOptions = setCookiesOnReq(appCookies);

    //* fetch and show message
    try {
        const { message } = await deleteBlogApi(blogId, requestOptions);
        revalidatePath("/dashboard/blogs", "page");
        return { message };
    } catch (e: any) {
        const errorMessage: string = e?.response?.data?.message;
        return { errorMessage };
    }
};
