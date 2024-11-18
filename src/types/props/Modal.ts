interface ModalProps {
    children : React.ReactNode;
    onClose?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    title?: string;
    open?: boolean;
    description?: string;
}

export default ModalProps;