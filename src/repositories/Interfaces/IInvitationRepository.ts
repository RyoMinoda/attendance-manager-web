import { IResult } from "../../models/axios/Result";
import { Invitation } from "../../models/states/Invitation";
import { MyProfile } from "../../models/utils/MyProfile";

export interface IInvitationRepository {
    GetInvitations(MyProfile: MyProfile): Promise<IResult<Array<Invitation>>>;
}