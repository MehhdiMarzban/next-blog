"use client";
import Link from "next/link";
import { Avatar, ButtonIcon } from "@/components/core";
import { useAuth } from "@/contexts/auth.context";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import SideBar from "./Sidebar";

function DashboardHeader() {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
    const { user, isLoading } = useAuth();

    const handleCloseDrawer = () => setIsOpenDrawer((prev) => !prev);

    return (
        <header className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}>
            <div className="flex items-center justify-between py-5 px-4 lg:px-8">
                <ButtonIcon
                    className="block lg:hidden border-none"
                    variant="outline"
                    onClick={handleCloseDrawer}>
                    {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
                </ButtonIcon>

                <div className="flex items-center gap-x-3">
                    <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-x-2">
                        <span className="text-sm lg:text-lg font-bold text-secondary-700">
                            سلام؛ {user?.name}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-x-3">
                    <Link href="/profile">
                        <ButtonIcon
                            className={`border-secondaray-200 rounded-full flex cursor-pointer items-center`}>
                            <Avatar src={user?.avatarUrl} />
                        </ButtonIcon>
                    </Link>
                </div>
                <Drawer isOpen={isOpenDrawer} onClose={handleCloseDrawer}>
                    <SideBar />
                </Drawer>
            </div>
        </header>
    );
}
export default DashboardHeader;
