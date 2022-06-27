import { injectable } from "tsyringe";
import { IResult, ResultMock } from "../../models/axios/Result";
import { Group } from "../../models/states/Group";
import { MyProfile } from "../../models/utils/MyProfile";
import { Guid } from "../../utils/Guid";
import { IGroupRepository } from "../Interfaces/IGroupRepository";

@injectable()
export class GroupRepositoryMock implements IGroupRepository {
    GetGroups(profile: MyProfile): Promise<IResult<Array<Group>>> {
        return new Promise((resolve) => {
            var list = new ResultMock(this.List());
            resolve(list);
        });
    }

    private List(): Array<Group> {
        const groupHeader = "group";
        const GroupMock: Array<Group> = [
            { Id: Guid.GetSpecifyGuid(groupHeader, 1), Name: "My Group", Color: "#043bb9"  },
            { Id: Guid.GetSpecifyGuid(groupHeader, 2), Name: "Search Department", Color: "#25b158"  },
            { Id: Guid.GetSpecifyGuid(groupHeader, 3), Name: "Analysis Department", Color: "#ddb158"  },
        ]
        return GroupMock;
    }
}