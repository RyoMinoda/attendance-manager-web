import { IResult } from "../models/axios/Result";
import { Group } from "../models/states/Group";
import { MyProfile } from "../models/utils/MyProfile";
import { IGroupRepository } from "./Interfaces/IGroupRepository";

export class GroupRepository implements IGroupRepository {
    GetGroup(profile: MyProfile, id: string): Promise<IResult<Group>> {
        throw new Error("Method not implemented.");
    }
    
    GetGroups(profile: MyProfile): Promise<IResult<Group[]>> {
        throw new Error("Method not implemented.");
    }
}