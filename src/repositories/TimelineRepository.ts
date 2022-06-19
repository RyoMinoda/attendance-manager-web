import { injectable } from "tsyringe";
import { Result } from "../models/axios/Result";
import { Timeline } from "../models/states/Timeline";
import { MyProfile } from "../models/utils/MyProfile";
import { ITimelineRepository } from "./Interfaces/ITimelineRepository";

@injectable()
export class TimelineRepository implements ITimelineRepository {
    GetTimelines(profile: MyProfile): Promise<Result<Timeline[]>> {
        throw new Error("Method not implemented.");
    }
}