"use client";
import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ButtonIcon } from "@/components/core";
import { ActionButtonProps } from "@/types/props";

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
            <ButtonIcon
                variant="outline">
                <PencilIcon />
            </ButtonIcon>
        </Link>
    );
};
