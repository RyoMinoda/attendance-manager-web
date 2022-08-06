import { IResult, ResultMock } from "../../models/axios/Result";
import { Invitation } from "../../models/states/Invitation";
import { Guid } from "../../utils/Guid";
import { MyConfig } from "../../models/utils/MyConfig";
import { IInvitationRepository } from "../Interfaces/IInvitationRepository";

export class InvitationRepositoryMock implements IInvitationRepository {
    GetInvitations(config: MyConfig): Promise<IResult<Invitation[]>> {
        return new Promise((resolve) => {
            const result = new ResultMock(this.GetList());
            resolve(result);
        });
    }

    private GetList(): Array<Invitation> {
        const mock: Array<Invitation> = [
            { InvitationId: "1", GroupId: Guid.GetSpecifyGuid("group", 1), InvitedBy: "John Nicol", IsAccepted: false, GroupName: "Contoso University"  },
            { InvitationId: "2", GroupId: Guid.GetSpecifyGuid("group", 2), InvitedBy: "John Nicol", IsAccepted: true, GroupName: "Palkia Company"  },
        ];
        return mock;
    }

}