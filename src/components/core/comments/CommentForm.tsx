"use client";

import { TextArea, SubmitButton } from "@/components/core";
import { createCommentAction } from "@/libs/server.actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
    errorMessage: "",
    message: "",
};

const CommentForm = ({ blogId, parentId, onClose }) => {
    const [state, formAction] = useFormState(
        createCommentAction,
        initialState as Partial<typeof initialState>
    );

    useEffect(() => {
        if (state?.message) {
            toast.success(state.message);
            onClose();
        } else if (state?.errorMessage) {
            toast.error(state.errorMessage);
        }
    }, [state]);

    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="max-w-md w-full">
                    <form
                        className="space-y-7"
                        // action={createComment.bind(null, blogId, parentId)}
                        action={async (formData: FormData) => {
                            formAction({ formData, blogId, parentId });
                        }}>
                        <TextArea name="text" label="متن نظر" isRequired />
                        <div className="mt-8">
                            <SubmitButton type="submit" className="w-full">
                                {parentId ? "ثبت پاسخ" : "ثبت نظر"}
                            </SubmitButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default CommentForm;
