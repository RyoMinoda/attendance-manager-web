import { IResult } from "../../models/axios/Result";
import { Group } from "../../models/states/Group";
import { MyConfig } from "../../models/utils/MyConfig";

export interface IGroupRepository {
    GetGroups(profile: MyConfig): Promise<IResult<Array<Group>>>;
    GetGroup(profile: MyConfig, id: string): Promise<IResult<Group>>;
}