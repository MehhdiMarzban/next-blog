interface User {
    _id: string;
    name: string;
    email: string;
    bookmarkedPosts: Array<string>;
    likedPosts: Array<string>;
    avatar: string;
    createdAt: string;
    updatedAt: string;
    avatarUrl: string;
}

export default User;
