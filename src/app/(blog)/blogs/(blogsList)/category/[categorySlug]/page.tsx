import { notFound } from "next/navigation";
import { BlogsList } from "@/components/ui";
import AppTexts from "@/constants/appTexts";
import { getBlogsByCategoryApi } from "@/services/blogs.service";
import { BlogType } from "@/types";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookiesOnReq";

const CategoryPage: React.FC<{ params: { categorySlug: string } }> = async ({ params }) => {
    let blogs: BlogType[] = [];
    try {
        const appCookies = cookies();
        const options = setCookiesOnReq(appCookies);
        blogs = await getBlogsByCategoryApi(params.categorySlug, options);
    } catch (error) {
        notFound();
    }

    if (blogs.length <= 0)
        return (
            <h1 className="text-lg font-bold text-center bg-secondary-200 py-2 rounded-md mb-4">
                {AppTexts.NOT_FOUND_PAGE}
            </h1>
        );

    return (
        <section>
            <h1 className="text-lg font-bold text-center bg-secondary-200 py-2 rounded-md mb-4">
                {blogs[0].category.title}
            </h1>
            <BlogsList blogs={blogs} />
        </section>
    );
};

export default CategoryPage;
