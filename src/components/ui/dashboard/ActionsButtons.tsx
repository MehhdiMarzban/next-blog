"use client";
import Link from "next/link";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ButtonIcon } from "@/components/core";
import { ActionButtonProps } from "@/types/props";
import AppTexts from "@/constants/appTexts";

export const DeleteBlogButton: React.FC<ActionButtonProps> = ({ id }) => {
    return (
        <ButtonIcon
            variant="outline"
            onClick={() => {
                console.log(id);
            }}>
            <TrashIcon />
        </ButtonIcon>
    );
};

export const UpdateBlogButton: React.FC<ActionButtonProps> = ({ id }) => {
    return (
        <Link href={`/profile/blogs/${id}/edit`}>
            <ButtonIcon variant="outline">
                <PencilIcon />
            </ButtonIcon>
        </Link>
    );
};

export const CreateBlogButton: React.FC = () => {
    return (
        <Link
            href="/profile/blogs/create"
            className="justify-self-center lg:justify-self-end flex gap-x-4 py-3 items-center rounded-lg  text-white bg-primary-900 px-4 text-sm font-m transition-colors hover:bg-primary-700">
            <span className="hidden md:block">{AppTexts.CREATE_NEW_BLOG}</span>
            <PlusIcon className="w-5" />
        </Link>
    );
};
