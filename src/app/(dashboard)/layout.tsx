import { DashboardHeader, Sidebar } from "@/components/ui/dashboard";

export const metadata = {
    title: "پروفایل",
    description: "پروفایل",
};

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="bg-secondary-0">
            <div className="grid grid-cols-12 h-screen">
                <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
                    <Sidebar />
                </aside>
                <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
                    <DashboardHeader />
                    <main className="bg-secondary-100 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
                        <div className="2xl:max-w-screen-2xl">{children}</div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
