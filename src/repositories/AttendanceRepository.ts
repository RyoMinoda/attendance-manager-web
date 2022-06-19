import { IResult } from "../models/axios/Result";
import { Attendance } from "../models/states/Attendance";
import { MyProfile } from "../models/utils/MyProfile";
import { IAttendanceRepository } from "./Interfaces/IAttendanceRepository";

export class AttendanceRepository implements IAttendanceRepository {
    async GetAttendances(profile: MyProfile): Promise<IResult<Attendance[]>> {
        throw new Error("Method not implemented.");
    }
}