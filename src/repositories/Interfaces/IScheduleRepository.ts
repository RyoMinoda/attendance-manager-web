import { IResult, Result } from "../../models/axios/Result";
import { Schedule } from "../../models/states/Schedule";
import { MyProfile } from "../../models/utils/MyProfile";

export interface IScheduleRepository {
    GetSchedules(profile: MyProfile): Promise<IResult<Array<Schedule>>>;
}