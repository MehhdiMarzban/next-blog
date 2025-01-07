"use client";
import classNames from "classnames";
import Link from "next/link";
import { NavLinkType } from "@/types";
import { usePathname } from "next/navigation";

function NavLink({ path, children }: Readonly<NavLinkType>) {
    const pathname = usePathname();

    return (
        <Link
            className={classNames(
                "block py-2 hover:text-secondary-300 dark:hover:text-slate-300 transition-all ease-out",
                { "text-secondary-200 dark:text-slate-100": pathname !== path },
                { "text-secondary-0 font-bold dark:text-slate-50": pathname === path }
            )}
            href={path}>
            {children}
        </Link>
    );
}

export default NavLink;
