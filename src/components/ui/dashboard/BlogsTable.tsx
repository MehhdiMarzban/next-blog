import { AppTable, Empty } from "@/components/core";
import AppTexts from "@/constants/appTexts";
import { getBlogsApi } from "@/services/blogs.service";
import BlogRow from "./BlogRow";

const BlogsTable: React.FC<{query?: string}> = async ({query = ""}) => {
    const blogs = await getBlogsApi(query);

    if(blogs.length === 0) return <Empty resourceName={AppTexts.BLOG_EMPTY} />
    
    return (
            <AppTable>
                <AppTable.Header>
                    {AppTexts.BLOGS_HEADER_TEXTS.map((item) => (
                        <th key={item}>{item}</th>
                    ))}
                </AppTable.Header>
                <AppTable.Body>
                    {blogs.map((item, index) => (
                        <BlogRow key={item._id} index={index} blog={item} />
                    ))}
                </AppTable.Body>
            </AppTable>
    );
};

export default BlogsTable;
