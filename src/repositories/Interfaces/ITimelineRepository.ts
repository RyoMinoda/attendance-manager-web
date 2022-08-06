import { Result } from "../../models/axios/Result";
import { Timeline } from "../../models/states/Timeline";
import { MyConfig } from "../../models/utils/MyConfig";

export interface ITimelineRepository {
    GetTimelines(config: MyConfig): Promise<Result<Array<Timeline>>>;
}