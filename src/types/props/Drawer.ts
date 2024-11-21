export default interface Drawer {
    isOpen: boolean;
    children: React.ReactNode;
    onClose?: () => void;
}
