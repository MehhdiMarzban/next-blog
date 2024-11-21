"use client";
import { createPortal } from "react-dom";
import { DrawerProps } from "@/types/props";
import { useEffect, useState } from "react";

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, onClose }) => {

    //* the useEffect is for prevent error when reloading page
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    if (!isLoaded) return null;

    return createPortal(
        <>
            <div
                className={`backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800 bg-opacity-30 ${
                    isOpen ? "block" : "hidden pointer-events-none"
                }`}
                onClick={onClose}></div>
            <div
                className={`fixed top-0 right-0 w-[250px] h-full transition-all ease-in-out duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}>
                <div className="max-h-full w-full bg-secondary-0 overflow-y-auto">{children}</div>
            </div>
        </>,
        document.body
    );
};

export default Drawer;
