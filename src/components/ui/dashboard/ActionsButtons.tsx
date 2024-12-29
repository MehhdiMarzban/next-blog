"use client";
import Link from "next/link";
import { useState } from "react";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ButtonIcon, Modal } from "@/components/core";
import { ActionButtonProps } from "@/types/props";
import AppTexts from "@/constants/appTexts";
import ConfirmDelete from "./ConfirmDelete";
import { deleteBlogAction } from "@/libs/server.actions";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const deleteBlogInitialState = { message: "", errorMessage: "" };
export const DeleteBlogButton: React.FC<ActionButtonProps> = ({ id, title }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [deleteState, formAction] = useFormState(
        deleteBlogAction,
        deleteBlogInitialState as Partial<typeof deleteBlogInitialState>
    );

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    const handleDeleteBlog = async (formData: FormData) => {
        formAction({ formData, blogId: id });
        console.log(deleteState);
        if (deleteState?.message) {
            toast.success(deleteState?.message);
        } else if (deleteState?.errorMessage) {
            toast.error(deleteState?.errorMessage);
        }
        handleCloseModal();
    };
    return (
        <>
            <ButtonIcon variant="outline" onClick={handleOpenModal}>
                <TrashIcon />
            </ButtonIcon>
            <Modal
                title={`${AppTexts.DELETE_BLOG} ${title}`}
                open={isOpen}
                onClose={handleCloseModal}>
                <ConfirmDelete
                    onClose={handleCloseModal}
                    onConfirm={handleDeleteBlog}
                    resourceName={title}
                />
            </Modal>
        </>
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
