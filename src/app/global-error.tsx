"use client";
import { Button } from "@/components/core";
import appTexts from "@/constants/appTexts";

const GlobalErrorPage: React.FC<{ error: Error & { digest?: string }; reset: () => void }> = ({
    error,
    reset,
}) => {
    return (
        <section className="text-center flex flex-col items-center justify-center h-screen overflow-hidden">
            <h1 className="text-2xl text-secondary-700 font-bold">{appTexts.ERROR_PAGE}</h1>
            <h2 className="text-xl text-secondary-600">{error.message}</h2>
            <Button variant="outline" onClick={reset}>
                {appTexts.RESET}
            </Button>
        </section>
    );
};

export default GlobalErrorPage;
