import { Suspense } from "react";
import { SuspenseFeedback } from "@/components/core";
import { BlogsTable, DashboardStatics } from "@/components/ui/dashboard";
import AppTexts from "@/constants/appTexts";

const ProfilePage = async () => {
    return (
        <div>
            <h1 className="text-secondary-600 mb-2 text-xl font-bold">{AppTexts.DASHBOARD}</h1>
            <Suspense fallback={<SuspenseFeedback />}>
                <DashboardStatics />
            </Suspense>

            <h1 className="text-secondary-600 my-2 text-xl font-bold">{AppTexts.LATEST_BLOGS}</h1>
            <Suspense fallback={<SuspenseFeedback />}>
                <BlogsTable query="sort=latest&limit=5" />
            </Suspense>
        </div>
    );
};

export default ProfilePage;
