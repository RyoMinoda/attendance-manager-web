import { Result } from "../../models/axios/Result";
import { UserDetail } from "../../models/states/UserDetail";
import { MyConfig } from "../../models/utils/MyConfig";

export interface IUserDetailRepository {
    GetUserDetail(config: MyConfig): Promise<Result<UserDetail>>;
}