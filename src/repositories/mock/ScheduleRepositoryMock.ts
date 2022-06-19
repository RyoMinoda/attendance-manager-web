import { IResult, ResultMock } from "../../models/axios/Result";
import { Schedule } from "../../models/states/Schedule";
import { MyProfile } from "../../models/utils/MyProfile";
import { DateObj } from "../../utils/DateObj";
import { IScheduleRepository } from "../Interfaces/IScheduleRepository";

export class ScheduleRepositoryMock implements IScheduleRepository {
    GetSchedules(profile: MyProfile): Promise<IResult<Schedule[]>> {
        return new Promise((resolve) => {
            const list = new ResultMock(this.GetList());
            resolve(list);
        });
    }

    private GetList(): Array<Schedule> {
        var dateTime = new DateObj(new Date());
        const common = { 
            IsActive: false,
            IsCarried: false,
            IsOver: false,
        };
        const list: Array<Schedule> = [
            { Id: "1", Name: "Analytical mechanics I", TimelineId: "1", ScheduleFor: dateTime.setTime(9, 0).getDate(), MinuteSpan: 50, ...common },
            { Id: "2", Name: "Appointment", TimelineId: "", ScheduleFor: dateTime.addDay(1).getDate(), MinuteSpan: 50, ...common },
            { Id: "3", Name: "Flight to Zurich", TimelineId: "", ScheduleFor: dateTime.addDay(2).getDate(), MinuteSpan: 50, ...common },
            { Id: "4", Name: "Electromagnetism II", TimelineId: "2", ScheduleFor: dateTime.setTime(15, 0).addHour(2).getDate(), MinuteSpan: 50, ...common },
            { Id: "5", Name: "Physical Chemistry", TimelineId: "3", ScheduleFor: dateTime.addDay(2).setTime(10, 0).getDate(), MinuteSpan: 50, ...common },
            { Id: "6", Name: "Analytic Geometry", TimelineId: "4", ScheduleFor: dateTime.addDay(3).setTime(11, 0).getDate(), MinuteSpan: 50, ...common},
        ];
        return list;
     }
}