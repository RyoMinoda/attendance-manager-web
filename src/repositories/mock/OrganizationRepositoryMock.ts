import { IResult, ResultMock } from "../../models/axios/Result";
import { Organization } from "../../models/states/Organization";
import { MyProfile } from "../../models/utils/MyProfile";
import { IOrganizationRepository } from "../Interfaces/IOrganizationRepository";

export class OrganizationRepositoryMock implements IOrganizationRepository {
    GetOrganizations(profile: MyProfile): Promise<IResult<Organization[]>> {
        return new Promise((resolve) => {
            const list = new ResultMock(this.GetList());
            resolve(list);
        });
    }

    private GetList(): Array<Organization> {
        const list: Array<Organization> = [
            { OrganizationId: "1", Name: "Doctol University" },
            { OrganizationId: "2", Name: "Vertal Company" },
        ];
        return list;
    }
}