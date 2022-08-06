import { IResult } from "../../models/axios/Result";
import { Invitation } from "../../models/states/Invitation";
import { MyConfig } from "../../models/utils/MyConfig";

export interface IInvitationRepository {
    GetInvitations(config: MyConfig): Promise<IResult<Array<Invitation>>>;
}