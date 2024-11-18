"use client";
import { useEffect, useRef } from "react";

export default function useOutsideClick(
    handler: (e?: React.MouseEvent<HTMLButtonElement>) => void = () => {},
    listenCapturing = true
) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                handler();
            }
        }

        document.addEventListener("click", handleClick, listenCapturing);

        return () => document.removeEventListener("click", handleClick, listenCapturing);
    }, [handler, listenCapturing]);

    return ref;
}
