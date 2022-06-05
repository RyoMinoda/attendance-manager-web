import { IResult } from "../../models/axios/Result";
import { Member } from "../../models/states/Member";

export interface IMemberRepository {
    GetMembers(): IResult<Array<Member>>;
}