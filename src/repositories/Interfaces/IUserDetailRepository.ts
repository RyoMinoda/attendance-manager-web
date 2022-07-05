import { Result } from "../../models/axios/Result";
import { UserDetail } from "../../models/states/UserDetail";
import { MyProfile } from "../../models/utils/MyProfile";

export interface IUserDetailRepository {
    GetUserDetail(profile: MyProfile): Promise<Result<UserDetail>>;
}