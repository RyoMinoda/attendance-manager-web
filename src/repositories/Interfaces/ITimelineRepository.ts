import { Timeline } from "../../models/states/Timeline";
import { MyProfile } from "../../models/utils/MyProfile";

export interface ITimelineRepository {
    GetTimelines(profile: MyProfile): Array<Timeline>;
}