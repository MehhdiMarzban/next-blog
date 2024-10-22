import appTexts from "@/constants/appTexts";

const LoadingPage = () => {
    return (
        <div className="makeCenter">
            <div className="loaderContainer">
                <div className="loader"></div>
                <span className="block text-[2rem] text-center align-middle mt-4 font-bold text-slate-100">
                    {appTexts.LOADING}
                </span>
            </div>
        </div>
    );
};

export default LoadingPage;
