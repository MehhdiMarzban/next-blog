import { Button, SubmitButton } from "@/components/core";
import AppTexts from "@/constants/appTexts";
import { ConfirmDeleteProps } from "@/types/props";

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({
    resourceName = "",
    disabled = false,
    onClose,
    onConfirm,
}) => {
    return (
        <div>
            <h2 className="font-bold text-base mb-8 text-secondary-700">
                {`${resourceName} ${AppTexts.BE_SURE_TO_DELETE}`}
            </h2>
            <form action={onConfirm}>
                <div className="flex justify-between items-center gap-x-16">
                    <Button type="button" className="flex-1" variant="outline" onClick={onClose}>
                        {AppTexts.CANCEL}
                    </Button>
                    <SubmitButton
                        variant="danger"
                        type="submit"
                        disabled={disabled}
                        className="flex gap-x-2 justify-center items-center flex-1">
                        {AppTexts.DELETE_BLOG}
                    </SubmitButton>
                </div>
            </form>
        </div>
    );
};

export default ConfirmDelete;
