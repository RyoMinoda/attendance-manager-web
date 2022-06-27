export type Schedule = {
    ScheduleId: string,
    TimelineId: string, 
    Name: string,
    ScheduleFor: Date,
    MinuteSpan: number,
    IsActive: boolean,
    IsCarried: boolean, 
    IsOver: boolean,
}

export class ScheduleClass {
    private schedules: Array<Schedule>;

    constructor(schedules: Array<Schedule>, timelineId: string) {
        this.schedules = schedules.filter(x => x.TimelineId === timelineId);
    }
}