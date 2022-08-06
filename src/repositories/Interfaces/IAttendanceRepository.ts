import { IResult } from "../../models/axios/Result";
import { Attendance } from "../../models/states/Attendance";
import { MyConfig } from "../../models/utils/MyConfig";

export interface IAttendanceRepository {
    GetAttendances(profile: MyConfig): Promise<IResult<Array<Attendance>>>
}