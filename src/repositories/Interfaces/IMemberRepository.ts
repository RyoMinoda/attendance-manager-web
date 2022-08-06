import { IResult } from "../../models/axios/Result";
import { Member } from "../../models/states/Member";
import { MyConfig } from "../../models/utils/MyConfig";

export interface IMemberRepository {
    GetMembers(config: MyConfig): Promise<IResult<Array<Member>>>;
}