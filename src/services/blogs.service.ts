import { BlogType, ResponseType } from "@/types";
import http from "./http.service";

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

export const getBlogById = async (blogId: BlogType["id"]): Promise<BlogType> => {
    return http.get(`/post/${blogId}`).then(({ data }) => data.data.post);
};

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
