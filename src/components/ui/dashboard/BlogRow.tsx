import { AppTable } from "@/components/core";
import { BlogType } from "@/types";
import { toLocalDateShort } from "@/utils/dateFormater";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/trancateText";
import { DeleteBlogButton, UpdateBlogButton } from "@/components/ui/dashboard";

const typeStyle = {
    free: {
        label: "رایگان",
        className: "badge--success",
    },
    premium: {
        label: "پولی",
        className: "badge--secondary",
    },
};

const BlogRow: React.FC<{ blog: BlogType; index: number }> = ({
    blog: { title, category, author, createdAt, type, id },
    index,
}) => {
    return (
        <AppTable.Row>
            <td>{toPersianDigits(index + 1)}</td>
            <td>{truncateText(title, 30)}</td>
            <td>{category.title}</td>
            <td>{author.name}</td>
            <td>{toLocalDateShort(createdAt)}</td>
            <td>
                <span className={`badge ${typeStyle[type].className}`}>
                    {typeStyle[type].label}
                </span>
            </td>
            <td>
                <div className="flex justify-start items-center gap-1">
                    <UpdateBlogButton id={id} title={title} />
                    <DeleteBlogButton id={id} title={title} />
                </div>
            </td>
        </AppTable.Row>
    );
};

export default BlogRow;
