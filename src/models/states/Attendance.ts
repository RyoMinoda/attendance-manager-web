export type Attendance = {
    Id: string;
    ScheduleId: string;
    AttendAt: Date,
    AttendType: string,
}

export const AttendanceUnion = {
    In: "in",
    Out: "out",
} as const;

export class DailyAttendanceClass {
    private attendances: Array<Attendance>;
    
    constructor(_attendances: Array<Attendance>, scheduleId: string) {
        this.attendances = _attendances.filter(x => x.ScheduleId === scheduleId);
    }

    getInDate = (): Date | null => {
        const target = this.attendances.filter(x => x.AttendType === AttendanceUnion.In);
        return target.length > 0 ? target[0].AttendAt : null;
    }
    
    getOutDate = (): Date | null => {
        const target = this.attendances.filter(x => x.AttendType === AttendanceUnion.Out);
        return target.length > 0 ? target[0].AttendAt : null;
    }
}