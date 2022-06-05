import { IResult } from "../models/axios/Result";
import { Group } from "../models/states/Group";
import { IGroupRepository } from "./Interfaces/IGroupRepository";

export class GroupRepository implements IGroupRepository {
    GetGroups(): IResult<Group[]> {
        throw new Error("Method not implemented.");
    }
}