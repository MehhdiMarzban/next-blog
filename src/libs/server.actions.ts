"use server";

import { cookies } from "next/headers";
import { createCommentApi } from "@/services/comments.service";
import { BlogType, CommentType } from "@/types";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { revalidatePath } from "next/cache";

export const createComment = async (
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
