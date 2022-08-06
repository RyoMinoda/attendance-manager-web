import { Result } from "../models/axios/Result";
import { UserDetail } from "../models/states/UserDetail";
import { MyConfig } from "../models/utils/MyConfig";
import { IUserDetailRepository } from "./Interfaces/IUserDetailRepository";

export class UserDetailRepository implements IUserDetailRepository {
    GetUserDetail(config: MyConfig): Promise<Result<UserDetail>> {
        throw new Error("Method not implemented.");
    }
}