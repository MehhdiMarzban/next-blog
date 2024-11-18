import Author from "./Author";
import Category from "./Category";
import Comment from "./Comment";

export default interface Blog {
    _id: string;
    title: string;
    slug: string;
    category: Category;
    type: "free"; //! need to create new type
    briefText: string;
    text: string;
    coverImage: string;
    readingTime: number;
    tags: string[];
    author: Author;
    related: [];
    createdAt: string;
    updatedAt: string;
    coverImageUrl: string;
    id: string;
    likesCount: number;
    isLiked: boolean;
    isBookmarked: boolean;
    comments: Comment[];
    commentsCount: number;
}
