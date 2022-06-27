import { IResult, ResultMock } from "../../models/axios/Result";
import { Attendance, AttendanceUnion } from "../../models/states/Attendance";
import { MyProfile } from "../../models/utils/MyProfile";
import { DateObj } from "../../utils/DateObj";
import { IAttendanceRepository } from "../Interfaces/IAttendanceRepository";

export class AttendanceRepositoryMock implements IAttendanceRepository {
    async GetAttendances(profile: MyProfile): Promise<IResult<Attendance[]>> {
        return new ResultMock(this.GetList());
    }

    GetList = (): Array<Attendance> => {
        var date = new DateObj(new Date());
        return [
            { Id: "1", ScheduleId: "1", AttendAt: date.setTime(9, 1).getDate(), AttendType: AttendanceUnion.In },
            { Id: "2", ScheduleId: "1", AttendAt: date.setTime(10, 1).getDate(), AttendType: AttendanceUnion.Out },
            { Id: "3", ScheduleId: "7", AttendAt: date.addDay(7).setTime(9, 2).getDate(), AttendType: AttendanceUnion.In },
            { Id: "4", ScheduleId: "7", AttendAt: date.addDay(7).setTime(10, 5).getDate(), AttendType: AttendanceUnion.Out },
            { Id: "5", ScheduleId: "4", AttendAt: date.setTime(9, 1).getDate(), AttendType: AttendanceUnion.In },
        ];
    }
}