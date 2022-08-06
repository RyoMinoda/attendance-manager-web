import { IResult } from "../../models/axios/Result";
import { Organization } from "../../models/states/Organization";
import { MyConfig } from "../../models/utils/MyConfig";

export interface IOrganizationRepository {
    GetOrganizations(config: MyConfig): Promise<IResult<Array<Organization>>>;
}