"use client";
import toast from "react-hot-toast";
import {
    HeartIcon,
    BookmarkIcon,
    ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import {
    HeartIcon as HeartIconSolid,
    BookmarkIcon as BookmarkIconSolid,
} from "@heroicons/react/24/solid";
import { ButtonIcon } from "@/components/core";
import { toPersianDigits } from "@/utils/numberFormatter";
import { BlogType } from "@/types";
import { bookmarkBlogApi, likeBlogsApi } from "@/services/blogs.service";
import { useRouter } from "next/navigation";

const BlogInteractions: React.FC<{ post: BlogType }> = ({ post }) => {
    const router = useRouter();
    const handleInteractions = async (blogId: string, interaction: "like" | "bookmark") => {
        try {
            let message = "";
            if (interaction === "like") {
                const { data } = await likeBlogsApi(blogId);
                message = data.message;
            } else if (interaction === "bookmark") {
                const { data } = await bookmarkBlogApi(blogId);
                message = data.message;
            }
            toast.success(message);
            router.refresh();
        } catch (error: any) {
            toast.error(error?.response?.data?.message);
        }
    };

    return (
        <div className="flex justify-center items-center mt-2 gap-x-4">
            <ButtonIcon variant="secondary">
                <ChatBubbleOvalLeftEllipsisIcon />
                <span>{toPersianDigits(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="danger" onClick={() => handleInteractions(post.id, "like")}>
                {post.isLiked ? <HeartIconSolid /> : <HeartIcon />}
                <span>{toPersianDigits(post.likesCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="primary" onClick={() => handleInteractions(post.id, "bookmark")}>
                {post.isBookmarked ? <BookmarkIconSolid /> : <BookmarkIcon />}
            </ButtonIcon>
        </div>
    );
};

export default BlogInteractions;
