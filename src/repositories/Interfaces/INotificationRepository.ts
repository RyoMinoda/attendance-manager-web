import { IResult } from "../../models/axios/Result";
import { MyConfig } from "../../models/utils/MyConfig";

export interface INotificationRepository {
    GetNotifications(config: MyConfig): Promise<IResult<Array<Notification>>>;
}