import { injectable } from "tsyringe";
import { Timeline } from "../models/states/Timeline";
import { MyProfile } from "../models/utils/MyProfile";
import { ITimelineRepository } from "./Interfaces/ITimelineRepository";

@injectable()
export class TimelineRepository implements ITimelineRepository {
    GetTimelines(profile: MyProfile): Timeline[] {
        throw new Error("Method not implemented.");
    }
}