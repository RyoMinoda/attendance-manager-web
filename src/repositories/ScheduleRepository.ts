import { injectable } from "tsyringe";
import { Result } from "../models/axios/Result";
import { Schedule } from "../models/states/Schedule";
import { MyProfile } from "../models/utils/MyProfile";
import { IScheduleRepository } from "./Interfaces/IScheduleRepository";

@injectable()
export class ScheduleRepository implements IScheduleRepository {
    GetSchedules(profile: MyProfile): Result<Schedule[]> {
        throw new Error("Method not implemented.");
    }
}