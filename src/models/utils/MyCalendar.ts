import { DateFormatUnion } from "../../utils/DateExtensions"

export type MyCalendar = {
    DateFormat: string
}

export const defaultMyCalendar: MyCalendar = {
    DateFormat: DateFormatUnion.English1Digit,
}