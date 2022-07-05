import { IResult } from "../models/axios/Result";
import { Invitation } from "../models/states/Invitation";
import { MyProfile } from "../models/utils/MyProfile";
import { IInvitationRepository } from "./Interfaces/IInvitationRepository";

export class InvitationRepository implements IInvitationRepository {
    GetInvitations(MyProfile: MyProfile): Promise<IResult<Invitation[]>> {
        throw new Error("Method not implemented.");
    }
}