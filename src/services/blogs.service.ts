import { BlogType } from "@/types";
import http from "./http.service";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getBlogBySlug = async (slug: string): Promise<BlogType> => {
    const {
        data: { data },
    } = await http.get(`/post/slug/${slug}`);
    const { post }: { post: BlogType } = data || {};
    return post;
};

export const getBlogs = async (): Promise<BlogType[]> => {
    const { data } = await http.get(`/post/list`);
    const {
        data: { posts },
    }: { data: { posts: BlogType[] } } = data || [];
    return posts;
};
