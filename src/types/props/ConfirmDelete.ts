
export default interface ConfirmDelete {
    resourceName?: string;
    disabled?: boolean;
    onClose: () => void;
    onConfirm: (object : any) => Promise<void>;
}