import { IResult } from "../../models/axios/Result";
import { Member } from "../../models/states/Member";
import { MyProfile } from "../../models/utils/MyProfile";

export interface IMemberRepository {
    GetMembers(profile: MyProfile): Promise<IResult<Array<Member>>>;
}