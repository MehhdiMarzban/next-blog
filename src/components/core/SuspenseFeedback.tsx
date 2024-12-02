import AppTexts from "@/constants/appTexts";
import { SpinnerMini } from "./Spinner";

const SuspenseFeedback: React.FC = () => {
    return (
        <div className="flex justify-center items-center gap-1">
            <span className="text-lg text-secondary-600 font-bold">{AppTexts.LOADING}</span>
            <SpinnerMini />
        </div>
    );
};

export default SuspenseFeedback;