import Link from "next/link";

import { CategoryType } from "@/types";
import { getCategoriesApi } from "@/services/category.service";

const CategoryList: React.FC = async () => {
    const { categories = [] }: { categories: CategoryType[] } = (await getCategoriesApi()) || {};

    return (
        <ul className="space-y-4 bg-secondary-100 text-secondary-600 rounded-md shadow-sm px-4 py-2 text-center">
            <Link className="hover:scale-105 transition-all ease-out" href={`/blogs/`}>
                همه
            </Link>
            {categories.map((category: CategoryType) => (
                <li className="hover:scale-105 transition-all ease-out" key={category._id}>
                    <Link href={`/blogs/category/${category.slug}`}>{category.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default CategoryList;
