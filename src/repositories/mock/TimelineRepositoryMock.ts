import { Result, ResultMock } from "../../models/axios/Result";
import { Timeline } from "../../models/states/Timeline";
import { MyProfile } from "../../models/utils/MyProfile";
import { DateObj } from "../../utils/DateObj";
import { ITimelineRepository } from "../Interfaces/ITimelineRepository";

export class TimelineRepositoryMock implements ITimelineRepository {
    GetTimelines(profile: MyProfile): Promise<Result<Timeline[]>> {
        return new Promise((resolve) => {
            const result = new ResultMock(this.GetList());
            resolve(result);
        });
    }

    private GetList() {
        const dateTime = new DateObj(new Date());
        const list: Array<Timeline> = [
            { Id: "1", Name: "Analytical mechanics I", Time: dateTime.setTime(9, 0).getDate(), MinuteSpan: 50, DayFrequency: 7 },
            { Id: "2", Name: "Electromagnetism II", Time: dateTime.setTime(15, 0).addHour(2).getDate(), MinuteSpan: 50, DayFrequency: 7 },
            { Id: "3", Name: "Physical Chemistry", Time: dateTime.addDay(2).setTime(10, 0).getDate(), MinuteSpan: 50, DayFrequency: 7 },
            { Id: "4", Name: "Analytic Geometry", Time: dateTime.addDay(3).setTime(11, 0).getDate(), MinuteSpan: 50, DayFrequency: 7 },
        ];
        return list;
    }
}