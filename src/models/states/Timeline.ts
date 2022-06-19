import { Palette } from "../utils/Palette"


export type Timeline = {
    Id: string,
    Name: string,
    Time: Date,
    MinuteSpan: number,
    DayFrequency: number
}

export const defaultTimeline: Timeline = {
    Id: "",
    Name: "",
    Time: new Date(),
    MinuteSpan: 0,
    DayFrequency: 0,
}

export class TimelineClass implements Timeline {
    Id: string
    Name: string
    Time: Date
    MinuteSpan: number
    DayFrequency: number

    constructor(timeline: Timeline) {
        this.Id = timeline.Id;
        this.Name = timeline.Name;
        this.Time = timeline.Time;
        this.MinuteSpan = timeline.MinuteSpan;
        this.DayFrequency = timeline.DayFrequency;
    }

    getFrequencyString = (): string => {
        if (this.DayFrequency === 1) {
            return "ED";
        }
        if (this.DayFrequency % 7 === 0 && this.DayFrequency !== 7) {
            return (this.DayFrequency / 7 - 1) + "W";
        }
        if (this.DayFrequency === 30) {
            return "EM";
        }
        if (this.DayFrequency === 365) {
            return "EY";
        }
        if (this.DayFrequency === 7) {
            return "EW";
        } else {
            return this.DayFrequency - 1 + "D"
        }
    }

    getColor = (palette: Palette): string => {
        if (this.DayFrequency < 7) {
            return palette.secondary.orange;
        }
        if (this.DayFrequency < 30) {
            return palette.secondary.red;
        }
        return palette.secondary.blue;
    }
}