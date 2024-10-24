import {
    HeartIcon,
    BookmarkIcon,
    ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { ButtonIcon } from "@/components/core";
import { toPersianDigits } from "@/utils/numberFormatter";
import {BlogType} from "@/types";

const BlogInteractions: React.FC<{ post : BlogType }> = ({
    post
}) => {
    return (
        <div className="flex justify-center items-center mt-2 gap-x-4">
            <ButtonIcon variant="secondary">
                <ChatBubbleOvalLeftEllipsisIcon />
                <span>{toPersianDigits(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="danger">
                <HeartIcon />
                <span>{toPersianDigits(post.likesCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="primary">
                <BookmarkIcon />
            </ButtonIcon>
        </div>
    );
};

export default BlogInteractions;
