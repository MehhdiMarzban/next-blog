"use client";

import appTexts from "@/constants/appTexts";
import { NavLink } from "../core";
import { useAuth } from "@/contexts/auth.context";

const navLinks = [
    {
        id: 1,
        children: appTexts.HOME,
        path: "/",
    },
    {
        id: 2,
        children: appTexts.BLOGS,
        path: "/blogs",
    },
];

function Header() {
    const { user, isLoading } = useAuth();
    
    return (
        <header
            className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-secondary-300 bg-primary-900 ${
                isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
            }`}>
            <nav className="container xl:max-w-screen-xl">
                <ul className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-x-10">
                        {navLinks.map((navLink) => {
                            return (
                                <li key={navLink.id}>
                                    <NavLink path={navLink.path}>{navLink.children}</NavLink>
                                </li>
                            );
                        })}
                    </div>
                    <li>
                        {user ? (
                            <NavLink path="/profile">{appTexts.PROFILE}</NavLink>
                        ) : (
                            <NavLink path="/signin">{appTexts.SIGNIN}</NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
