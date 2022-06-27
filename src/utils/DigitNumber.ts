export const getDigitNumber = (digit: number, number: number): string => {
    return ("0" + number).slice(-1 * digit);
}

export const getEmptyDigitNumber = (digit: number, number: number): string => {
    return (" " + number).slice(-1 * digit);
}