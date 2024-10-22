import { useRouter } from "next/navigation";

const useGetback = () => {
    const router = useRouter();
    const getback = () => {
        router.back();
    };

    return getback;
};

export default useGetback;
