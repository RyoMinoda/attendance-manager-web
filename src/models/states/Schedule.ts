export type Schedule = {
    Id: string,
    TimelineId: string, 
    Name: string,
    ScheduleFor: Date,
    MinuteSpan: number,
    IsActive: boolean,
    IsCarried: boolean, 
    IsOver: boolean,
}