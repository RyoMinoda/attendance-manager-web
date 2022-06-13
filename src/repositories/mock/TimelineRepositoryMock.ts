import { Timeline } from "../../models/states/Timeline";
import { MyProfile } from "../../models/utils/MyProfile";
import { ITimelineRepository } from "../Interfaces/ITimelineRepository";

export class TimelineRepositoryMock implements ITimelineRepository {
    GetTimelines(profile: MyProfile): Timeline[] {
        throw new Error("Method not implemented.");
    }

}