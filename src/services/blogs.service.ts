import { BlogType, ResponseType } from "@/types";
import http from "./http.service";

export const getBlogBySlugApi = async (slug: string): Promise<BlogType> => {
    const {
        data: { data },
    } = await http.get(`/post/slug/${slug}`);
    const { post }: { post: BlogType } = data || {};
    return post;
};

export const getBlogsApi = async (options = {}): Promise<BlogType[]> => {
    const { data } = await http.get(`/post/list`, options);
    const {
        data: { posts },
    }: { data: { posts: BlogType[] } } = data || [];
    return posts;
};

export const getBlogsByCategoryApi = async (category: string, options): Promise<BlogType[]> => {
    const {
        data: { data },
    } = await http.get(`/post/list?categorySlug=${category}`, options);
    const { posts } = data || [];
    return posts;
};

export const likeBlogsApi = (blogId: string): Promise<ResponseType> => {
    return http.post(`/post/like/${blogId}`).then((data) => data.data);
};

export const bookmarkBlogApi = (blogId: string): Promise<ResponseType> => {
    return http.post(`/post/bookmark/${blogId}`).then((data) => data.data);
};
