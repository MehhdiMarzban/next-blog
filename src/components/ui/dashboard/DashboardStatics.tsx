import { cookies } from "next/headers";
import DashboardCard from "./DashboardCard";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { dashboardStaticNumberApi } from "@/services/dashboard.services";

const DashboardStatics: React.FC = async () => {
    const appCookies = cookies();
    const options = setCookiesOnReq(appCookies);

    const { blogsCounts, commentsCounts, usersCounts } = await dashboardStaticNumberApi(options);
    return (
        <div className="grid gap-6 md:grid-cols-3 justify-between items-center mb-8">
            <DashboardCard title="کاربران" type="users" value={usersCounts} />
            <DashboardCard title="نظرات" type="comments" value={commentsCounts} />
            <DashboardCard title="وبلاگ ها" type="blogs" value={blogsCounts} />
        </div>
    );
};

export default DashboardStatics;
