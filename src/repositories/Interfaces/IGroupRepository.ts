import { IResult } from "../../models/axios/Result";
import { Group } from "../../models/states/Group";

export interface IGroupRepository {
    GetGroups(): IResult<Array<Group>>
}