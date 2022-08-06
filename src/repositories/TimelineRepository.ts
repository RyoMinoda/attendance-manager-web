import { injectable } from "tsyringe";
import { Result } from "../models/axios/Result";
import { Timeline } from "../models/states/Timeline";
import { MyConfig } from "../models/utils/MyConfig";
import { ITimelineRepository } from "./Interfaces/ITimelineRepository";

@injectable()
export class TimelineRepository implements ITimelineRepository {
    GetTimelines(config: MyConfig): Promise<Result<Timeline[]>> {
        throw new Error("Method not implemented.");
    }
}