import { injectable } from "tsyringe";
import { Result } from "../models/axios/Result";
import { Schedule } from "../models/states/Schedule";
import { MyConfig } from "../models/utils/MyConfig";
import { IScheduleRepository } from "./Interfaces/IScheduleRepository";

@injectable()
export class ScheduleRepository implements IScheduleRepository {
    GetSchedules(config: MyConfig): Promise<Result<Schedule[]>> {
        throw new Error("Method not implemented.");
    }
}