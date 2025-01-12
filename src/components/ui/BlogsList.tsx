import { BlogCard } from "@/components/core";
import { BlogType } from "@/types";

const BlogsList: React.FC<{blogs : BlogType[]}> = ({blogs}) => {
    
    return (
        <div className="grid grid-cols-12 gap-2 md:gap-8 text-secondary-600 p-1 md:p-4 mb-4 text-center">
            {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog._id} />
            ))}
        </div>
    );
};

export default BlogsList;