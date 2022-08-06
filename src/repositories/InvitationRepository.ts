import { IResult } from "../models/axios/Result";
import { Invitation } from "../models/states/Invitation";
import { MyConfig } from "../models/utils/MyConfig";
import { IInvitationRepository } from "./Interfaces/IInvitationRepository";

export class InvitationRepository implements IInvitationRepository {
    GetInvitations(config: MyConfig): Promise<IResult<Invitation[]>> {
        throw new Error("Method not implemented.");
    }
}