import { IResult } from "../models/axios/Result";
import { Attendance } from "../models/states/Attendance";
import { MyConfig } from "../models/utils/MyConfig";
import { IAttendanceRepository } from "./Interfaces/IAttendanceRepository";

export class AttendanceRepository implements IAttendanceRepository {
    async GetAttendances(config: MyConfig): Promise<IResult<Attendance[]>> {
        throw new Error("Method not implemented.");
    }
}