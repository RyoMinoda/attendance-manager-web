import { injectable } from "tsyringe";
import { IResult } from "../models/axios/Result";
import { Organization } from "../models/states/Organization";
import { MyProfile } from "../models/utils/MyProfile";
import { IOrganizationRepository } from "./Interfaces/IOrganizationRepository";

@injectable()
export class OrganizationRepository implements IOrganizationRepository {
    GetOrganizations(profile: MyProfile): Promise<IResult<Organization[]>> {
        throw new Error("Method not implemented.");
    }
}