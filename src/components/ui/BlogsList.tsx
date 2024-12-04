import { BlogCard } from "@/components/core";
import { BlogType } from "@/types";

const BlogsList: React.FC<{blogs : BlogType[]}> = ({blogs}) => {
    
    return (
        <div className="grid grid-cols-12 gap-2 md:gap-8 bg-secondary-100 text-secondary-600 rounded-md shadow-sm px-1 md:px-4 py-2 mb-4 text-center">
            {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog._id} />
            ))}
        </div>
    );
};

export default BlogsList;