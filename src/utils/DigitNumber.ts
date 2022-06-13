export class DigitNumber {
    static GetDigit(digit: number, number: number): String {
        return ("0" + number).slice(-1 * digit);
    }
}