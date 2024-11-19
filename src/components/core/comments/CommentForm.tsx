"use client";

import { TextArea, SpinnerMini, SubmitButton } from "@/components/core";
import { createComment } from "@/libs/server.actions";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
    error: "",
    message: "",
};

const CommentForm = ({ blogId, parentId, onClose }) => {
    const [text, setText] = useState("");
    // const [state, formAction] = useFormState(createComment, initialState);
    const ref = useRef(null);
    let isLoading = false;

    // useEffect(() => {
    //     if (state?.message) {
    //         toast.success(state.message);
    //         onClose();
    //     }
    //     if (state?.error) {
    //         toast.error(state.error);
    //     }
    // }, [state]);

    // const createCommentWithData = createComment.bind(null, postId, parentId);
    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="max-w-md  w-full">
                    <form
                        ref={ref}
                        className="space-y-7"
                        action={createComment.bind(null, blogId, parentId)}
                        // action={async (formData) => {
                        //     await formAction({ formData, postId, parentId });
                        //     ref?.current?.reset();
                        // }}
                        >
                        <TextArea
                            name="text"
                            label="متن نظر"
                            value={text}
                            isRequired
                            onChange={(e) => setText(e.target.value)}
                        />
                        <div className="mt-8">
                            {isLoading ? (
                                <div>
                                    <SpinnerMini />
                                </div>
                            ) : (
                                <SubmitButton type="submit" className="w-full">
                                    {parentId ? "ثبت پاسخ" : "ثبت نظر"}
                                </SubmitButton>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default CommentForm;
