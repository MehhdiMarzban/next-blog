import { cookies } from "next/headers";
import { BlogCard } from "@/components/core";
import { getBlogsApi } from "@/services/blogs.service";
import setCookiesOnReq from "@/utils/setCookiesOnReq";

const BlogsList: React.FC = async () => {
    await new Promise((res) =>
        setTimeout(() => {
            res("waiting done!");
        }, 1000)
    );
    const appCookies = cookies();
    const options = setCookiesOnReq(appCookies);
    const posts = await getBlogsApi(options);

    return (
        <div className="grid grid-cols-12 gap-8 bg-secondary-100 text-secondary-600 rounded-md shadow-sm px-4 py-2 mb-4 text-center">
            {posts.map((post) => (
                <BlogCard post={post} key={post._id} />
            ))}
        </div>
    );
};

export default BlogsList;
