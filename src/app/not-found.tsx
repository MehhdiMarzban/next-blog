"use client"
import Link from "next/link";
import Lottie from "lottie-react";
import * as animationData from "@/assets/lotties/notfound.json";
import appTexts from "@/constants/appTexts";
import { Button } from "@/components/core";
import useGetback from "@/hooks/useGetback";

const NotFoundPage = () => {

    const getback = useGetback();

    return (
        <section className="flex flex-col justify-center items-center bg-secondary-100 h-screen space-y-2">
            <Lottie animationData={animationData} loop height={400} width={400} />
            <h1 className="text-center text-pretty text-3xl text-secondary-700">{appTexts.NOT_FOUND_PAGE}</h1>
            <Button variant="primary" onClick={getback}>
                <Link href="/">{appTexts.BACK_TO_LAST_PAGE}</Link>
            </Button>
        </section>
    );
};

export default NotFoundPage;
