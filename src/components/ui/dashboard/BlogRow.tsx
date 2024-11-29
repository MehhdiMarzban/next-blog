import { AppTable } from "@/components/core";
import { BlogType } from "@/types";
import { toLocalDateShort } from "@/utils/dateFormater";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/trancateText";

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
    blog: { title, category, author, createdAt, type },
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
            <td>اکشن ها</td>
        </AppTable.Row>
    );
};

export default BlogRow;
