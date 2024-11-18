"use client";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ModalProps } from "@/types/props";

const Modal: React.FC<ModalProps> = ({ open, onClose, title = "", children, description = "" }) => {
    const ref = useOutsideClick(onClose);

    return (
        open &&
        createPortal(
            <div
                className="backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
                <div
                    ref={ref}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto">
                    <div
                        className="flex items-center justify-between border-b 
          border-b-secondary-300 pb-2 mb-6">
                        <div>
                            <p className="text-secondary-700 font-bold text-base">{title}</p>
                            <p className="text-secondary-400 text-sm lg:text-base">{description}</p>
                        </div>
                        <button onClick={onClose}>
                            <XMarkIcon className="w-5 h-5 text-secondary-500" />
                        </button>
                    </div>
                    {children}
                </div>
            </div>,
            document.body
        )
    );
};

export default Modal;
