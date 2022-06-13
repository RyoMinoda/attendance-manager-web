import { IResult, ResultMock } from "../../models/axios/Result";
import { Schedule } from "../../models/states/Schedule";
import { MyProfile } from "../../models/utils/MyProfile";
import { DateObj } from "../../utils/DateObj";
import { IScheduleRepository } from "../Interfaces/IScheduleRepository";

export class ScheduleRepositoryMock implements IScheduleRepository {
    GetSchedules(profile: MyProfile): IResult<Schedule[]> {
        return new ResultMock(this.GetList());
    }

    private GetList(): Array<Schedule> {
        var dateTime = new DateObj(new Date());
        const list: Array<Schedule> = [
            { Id: "1", Index: 1, Name: "Analytical mechanics I", TimelineId: "1", ScheduleFor: dateTime.addDay(0) },
            { Id: "2", Index: 2, Name: "Appointment", TimelineId: "2", ScheduleFor: dateTime.addDay(1) },
            { Id: "3", Index: 3, Name: "Flight to Zurich", TimelineId: "3", ScheduleFor: dateTime.addDay(2) },
        ];
        return list;
     }
}