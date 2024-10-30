import { toPersianDigits } from "@/utils/numberFormatter";

export default function BlogsLengthHandler({ search, blogsLength }) {
    let result: any = null;

    if (blogsLength > 0 && search) {
        result = <h5>{`تعداد ${toPersianDigits(blogsLength)} نتیجه برای جستجوی " ${search} "`}</h5>;
    } else if (blogsLength === 0 && search) {
        result = (
            <h5>
                {` وبلاگی با عنوان `}
                <span className="font-bold text-lg text-secondary-600">" {search} "</span>
                {` یافت نشد! `}
            </h5>
        );
    } else if (blogsLength === 0 && !search) {
        result = <h5>متاسفانه وبلاگی وجود ندارد!</h5>;
    }

    if (!result) return null;
    return <div className="text-center bg-secondary-200 py-2 rounded-md my-1">{result}</div>;
}
