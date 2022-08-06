import { injectable } from "tsyringe";
import { IResult } from "../models/axios/Result";
import { Organization } from "../models/states/Organization";
import { MyConfig } from "../models/utils/MyConfig";
import { IOrganizationRepository } from "./Interfaces/IOrganizationRepository";

@injectable()
export class OrganizationRepository implements IOrganizationRepository {
    GetOrganizations(config: MyConfig): Promise<IResult<Organization[]>> {
        throw new Error("Method not implemented.");
    }
}