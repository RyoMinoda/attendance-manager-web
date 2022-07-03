import { IResult } from "../../models/axios/Result";
import { Group } from "../../models/states/Group";
import { MyProfile } from "../../models/utils/MyProfile";

export interface IGroupRepository {
    GetGroups(profile: MyProfile): Promise<IResult<Array<Group>>>;
    GetGroup(profile: MyProfile, id: string): Promise<IResult<Group>>;
}