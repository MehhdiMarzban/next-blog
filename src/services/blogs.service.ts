import { BlogType, ResponseType } from "@/types";
import http from "./http.service";
import { AxiosRequestConfig } from "axios";

export const getBlogBySlugApi = async (slug: string, options): Promise<BlogType> => {
    const {
        data: { data },
    } = await http.get(`/post/slug/${slug}`, options);
    const { post }: { post: BlogType } = data || {};
    return post;
};

export const getBlogsApi = async (queries: string, options = {}): Promise<BlogType[]> => {
    const { data } = await http.get(`/post/list?${queries}`, options);
    const {
        data: { posts },
    }: { data: { posts: BlogType[] } } = data || [];
    return posts;
};

export const getTotalBlogsApi = async (queries: string = "", options = {}): Promise<number> => {
    return http.get(`/post/list?${queries}`, options).then(({ data }) => data.data.totalPages);
};

/**
 * Fetches a blog by its ID.
 * If the blog does not exist, the function resolves to undefined.
 * @param blogId The ID of the blog to fetch.
 * @returns A promise that resolves to the fetched blog or undefined.
 */
export const getBlogById = async (blogId: BlogType["id"]): Promise<BlogType | undefined> => {
    return await http
        .get(`/post/${blogId}`)
        .then(({ data }) => data.data.post)
        .catch((error) => undefined);
};

export const deleteBlogApi = async (blogId : BlogType["id"], options: AxiosRequestConfig = {}) : Promise<{message : string}> => {
    return await http.delete(`/post/remove/${blogId}`, options).then(({data}) => data.data);
}

export const createBlogApi = async (
    formData: FormData
): Promise<{ message: string; post: BlogType }> => {
    return http.post("/post/create", formData).then(({ data }) => data.data);
};

export const editBlogApi = async ({
    blogId,
    formData,
}: {
    blogId: BlogType["id"];
    formData: FormData;
}): Promise<{ message: string }> => {
    return http.patch(`/post/update/${blogId}`, formData).then(({ data }) => data.data);
};

export const likeBlogsApi = (blogId: string): Promise<ResponseType> => {
    return http.post(`/post/like/${blogId}`).then((data) => data.data);
};

export const bookmarkBlogApi = (blogId: string): Promise<ResponseType> => {
    return http.post(`/post/bookmark/${blogId}`).then((data) => data.data);
};

// export const getBlogsByCategoryApi = async (category: string, options): Promise<BlogType[]> => {
//     const {
//         data: { data },
//     } = await http.get(`/post/list?categorySlug=${category}`, options);
//     const { posts } = data || [];
//     return posts;
// };
