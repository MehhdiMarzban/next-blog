export default function detectTextDirection(text: string) {
    // Regular expressions to match RTL and LTR characters
    const rtlRegex =
        /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u08A0-\u08FF\uFB1D-\uFB4F\uFB50-\uFDFF\uFE70-\uFEFF]/;
    const ltrRegex =
        /[\u0000-\u007F\u0041-\u005A\u0061-\u007A\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u2C60-\u2C7F\u0300-\u036F\u1E00-\u1EFF]/;

    let rtlCount = 0;
    let ltrCount = 0;

    for (let char of text) {
        if (rtlRegex.test(char)) {
            rtlCount++;
        } else if (ltrRegex.test(char)) {
            ltrCount++;
        }
    }

    if (rtlCount > ltrCount) {
        return "rtl"; // Right-to-Left
    } else if (ltrCount > rtlCount) {
        return "ltr"; // Left-to-Right
    } else {
        return "rtl"; // Neither or equal
    }
}
