import { BlogCard } from "@/components/core";
import { getBlogs } from "@/services/blogs.service";

const BlogsList: React.FC = async () => {
    await new Promise((res) =>
        setTimeout(() => {
            res("");
        }, 3000)
    );

    const posts = await getBlogs(); 
    
    return (
        <div className="grid grid-cols-12 gap-8 bg-secondary-100 text-secondary-600 rounded-md shadow-sm px-4 py-2 mb-4 text-center">
            {posts.map((post) => (
                <BlogCard post={post} key={post._id} />
            ))}
        </div>
    );
};

export default BlogsList;
