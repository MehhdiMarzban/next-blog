import { BlogsTable, DashboardCard } from "@/components/ui/dashboard";
import { dashboardStaticNumberApi } from "@/services/dashboard.services";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { cookies } from "next/headers";

const ProfilePage = async () => {
    const appCookies = cookies();
    const options = setCookiesOnReq(appCookies);

    const { blogsCounts, commentsCounts, usersCounts } = await dashboardStaticNumberApi(options);
    return (
        <div>
            <div className="grid gap-6 md:grid-cols-3 justify-between items-center mb-8">
                <DashboardCard title="کاربران" type="users" value={usersCounts} />
                <DashboardCard title="نظرات" type="comments" value={commentsCounts} />
                <DashboardCard title="وبلاگ ها" type="blogs" value={blogsCounts} />
            </div>
            <BlogsTable query="sort=latest&limit=5" />
        </div>
    );
};

export default ProfilePage;