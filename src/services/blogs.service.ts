import { BlogType } from "@/types";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getBlogBySlug = async (slug: string): Promise<BlogType> => {
    const response = await fetch(`${BASE_URL}/post/slug/${slug}`);
    const { data } = await response.json();
    const { post }: { post: BlogType } = data || {};
    return post;
};

export const getBlogs = async (): Promise<BlogType[]> => {
    const response = await fetch(`${BASE_URL}/post/list`);
    const { data } = await response.json();
    const { posts }: { posts: BlogType[] } = data || [];
    return posts;
};
