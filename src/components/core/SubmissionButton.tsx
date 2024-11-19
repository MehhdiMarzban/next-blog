"use client";
import { useFormStatus } from "react-dom";
import { SpinnerMini, Button } from "@/components/core";
import { ButtonType } from "@/types";

export default function SubmitButton({ children, className, ...props } : Readonly<ButtonType>) {
    const { pending } = useFormStatus();
    return (
        <Button
            {...props}
            disabled={pending}
            className={`flex items-center justify-center gap-x-4 py-4
        ${className} 
        `}>
            {children}
            {pending && <SpinnerMini />}
        </Button>
    );
}
