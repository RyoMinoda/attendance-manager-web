import { getDigitNumber, getEmptyDigitNumber } from "./DigitNumber";

export const DateFormatUnion = {
    Japanese2Digit: "yyyy/MM/dd",
    Japanese1Digit: "yyyy/M/d",
    English2Digit: "MM/dd/yyyy",
    English1Digit: "M/d/yyyy",
    EnglishMonth: "MMM/d/yyyy"
} as const;

export const TimeFormatUnion = {
    Digit2: "HH:mm:ss"
}


export const formatDate = (date: Date | null, format: string): string => {
    if (date == null) return "";
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    switch (format) {
        case DateFormatUnion.Japanese1Digit:
            return year + "/" + month + "/" + day;
        case DateFormatUnion.Japanese2Digit:
            return year + "/" + getDigitNumber(2, month) + "/" + getDigitNumber(2, day);
        case DateFormatUnion.English2Digit:
            return getDigitNumber(2, month) + "/" + getDigitNumber(2, day) + "/" + year;
        case DateFormatUnion.English1Digit:
            return month + "/" + day + "/" + year;
    }
    return "";
}

export const formatDateOnly = (date: Date | null, format: string): string => {
    if (date == null) return "";
    const month = date.getMonth() + 1;
    const day = date.getDate();
    switch (format) {
        case DateFormatUnion.Japanese1Digit:
            return month + "/" + day;
        case DateFormatUnion.Japanese2Digit:
            return getDigitNumber(2, month) + "/" + getDigitNumber(2, day);
        case DateFormatUnion.English2Digit:
            return getDigitNumber(2, month) + "/" + getDigitNumber(2, day);
        case DateFormatUnion.English1Digit:
            return getEmptyDigitNumber(2, month) + "/" + getEmptyDigitNumber(2, day);
    }
    return "";
}

export const formatTime = (date: Date | null): string => {
    if (date == null) return "";
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return getDigitNumber(2, hours) + ":" +  getDigitNumber(2, minutes) + ":" +getDigitNumber(2, seconds);
}

export const isSameDate = (date1: Date, date2: Date) => {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}