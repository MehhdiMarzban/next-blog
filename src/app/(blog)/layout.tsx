import { Header } from "@/components/ui";

const BlogsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container xl:max-w-screen-xl">{children}</div>
        </>
    );
};

export default BlogsLayout;
