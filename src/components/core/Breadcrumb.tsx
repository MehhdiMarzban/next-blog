import Link from "next/link";
import { BreadcrumbsProps } from "@/types/props";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
    return (
        <nav aria-label="Breadcrumb" className="mb-8 block">
            <ol className="flex text-lg gap-x-2">
                {breadcrumbs.map((breadcrumb, index) => {
                    const active: boolean = index === breadcrumbs.length - 1;
                    return (
                        <li
                            key={breadcrumb.href}
                            aria-current={active}
                            className={`${active ? "text-secondary-700" : "text-secondary-500"}
            flex gap-x-2
              `}>
                            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                            {!active ? <span className="inline-block">/</span> : null}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
