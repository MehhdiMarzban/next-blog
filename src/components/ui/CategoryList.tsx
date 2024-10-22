import Link from "next/link";

import { CategoryType } from "@/types";

const CategoryList: React.FC = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
    const {
        data: { categories },
    }: { data: { categories: CategoryType[] } } = await res.json();

    return (
        <ul className="space-y-4 bg-secondary-100 text-secondary-600 rounded-md shadow-sm px-4 py-2 text-center">
            <Link className="hover:scale-125 transition-all ease-out" href={`/blogs/`}>
                همه
            </Link>
            {categories.map((category: CategoryType) => (
                <li className="hover:scale-125 transition-all ease-out" key={category._id}>
                    <Link href={`/blogs/category/${category.slug}`}>{category.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default CategoryList;
