import Blog from "./Blog";
import User from "./User";

interface Comment {
    _id: string;
    user: User;
    post: Blog;
    content: {
        text: string;
    };
    status: 0 | 1 | 2;
    openToComment: boolean;
    answers: Comment[];
    createdAt: string;
}

export default Comment;
