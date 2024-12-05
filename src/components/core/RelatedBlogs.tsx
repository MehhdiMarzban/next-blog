import { BlogType } from "@/types";
import CoverImage from "./CoverImage";
import Author from "./Author";
import AppTexts from "@/constants/appTexts";

const RelatedBlogs: React.FC<{ blogs: BlogType[] }> = ({ blogs }) => {
    return (
        <div className="mb-10">
            <p className="text-xl mb-4 text-secondary-500">{AppTexts.RELATED_BLOGS}</p>
            <div className="grid gap-4 grid-cols-6">
                {blogs.map((item) => {
                    return (
                        <div key={item._id} className="col-span-6 md:col-span-3 lg:col-span-2 bg-secondary-50 rounded-md">
                            <CoverImage
                                src={item.coverImageUrl}
                                slug={item.slug}
                                alt={item.title}
                            />
                            <div className="flex items-center justify-between px-4 py-2">
                                <Author {...item.author} />
                                <p>{item.title}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedBlogs;
