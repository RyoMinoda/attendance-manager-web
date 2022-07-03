import { IResult } from "../../models/axios/Result";
import { Organization } from "../../models/states/Organization";
import { MyProfile } from "../../models/utils/MyProfile";

export interface IOrganizationRepository {
    GetOrganizations(profile: MyProfile): Promise<IResult<Array<Organization>>>;
}