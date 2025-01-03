import Avatar from "./Avatar";

const Author: React.FC<Readonly<{ name: string; avatarUrl: string }>> = ({ name, avatarUrl }) => {
    return (
        <div className="flex items-center gap-x-1">
            <Avatar src={avatarUrl} width={28} />
            <span className="text-sm text-secondary-500 truncate">{name}</span>
        </div>
    );
};

export default Author;
