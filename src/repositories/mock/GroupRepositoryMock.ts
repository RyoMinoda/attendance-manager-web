import { IResult, ResultMock } from "../../models/axios/Result";
import { Group } from "../../models/states/Group";
import { Guid } from "../../utils/Guid";
import { IGroupRepository } from "../Interfaces/IGroupRepository";

export class GroupRepositoryMock implements IGroupRepository {
    GetGroups(): IResult<Array<Group>> {
        return new ResultMock(this.List());
    }

    private List(): Array<Group> {
        const groupHeader = "group";
        const GroupMock: Array<Group> = [
            { Id: Guid.GetSpecifyGuid(groupHeader, 1), Name: "My Group"  },
            { Id: Guid.GetSpecifyGuid(groupHeader, 2), Name: "Search Department"  },
        ]
        return GroupMock;
    }
}