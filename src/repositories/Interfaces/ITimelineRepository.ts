import { Result } from "../../models/axios/Result";
import { Timeline } from "../../models/states/Timeline";
import { MyProfile } from "../../models/utils/MyProfile";

export interface ITimelineRepository {
    GetTimelines(profile: MyProfile): Promise<Result<Array<Timeline>>>;
}