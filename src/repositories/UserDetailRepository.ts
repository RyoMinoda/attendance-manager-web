import { Result } from "../models/axios/Result";
import { UserDetail } from "../models/states/UserDetail";
import { MyProfile } from "../models/utils/MyProfile";
import { IUserDetailRepository } from "./Interfaces/IUserDetailRepository";

export class UserDetailRepository implements IUserDetailRepository {
    GetUserDetail(profile: MyProfile): Promise<Result<UserDetail>> {
        throw new Error("Method not implemented.");
    }

}