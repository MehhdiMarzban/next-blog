const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-2 w-full max-w-md bg-secondary-200 rounded-md px-4 py-6">{children}</div>
        </div>
    );
};

export default AuthLayout;