import { IResult, Result } from "../../models/axios/Result";
import { Schedule } from "../../models/states/Schedule";
import { MyConfig } from "../../models/utils/MyConfig";

export interface IScheduleRepository {
    GetSchedules(config: MyConfig): Promise<IResult<Array<Schedule>>>;
}