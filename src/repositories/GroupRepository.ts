import { IResult } from "../models/axios/Result";
import { Group } from "../models/states/Group";
import { MyConfig } from "../models/utils/MyConfig";
import { IGroupRepository } from "./Interfaces/IGroupRepository";

export class GroupRepository implements IGroupRepository {
    GetGroup(config: MyConfig, id: string): Promise<IResult<Group>> {
        throw new Error("Method not implemented.");
    }
    
    GetGroups(config: MyConfig): Promise<IResult<Group[]>> {
        throw new Error("Method not implemented.");
    }
}