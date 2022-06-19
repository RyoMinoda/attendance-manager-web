import { IResult } from "../../models/axios/Result";
import { Attendance } from "../../models/states/Attendance";
import { MyProfile } from "../../models/utils/MyProfile";

export interface IAttendanceRepository {
    GetAttendances(profile: MyProfile): Promise<IResult<Array<Attendance>>>
}