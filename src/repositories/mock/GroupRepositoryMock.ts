import { injectable } from "tsyringe";
import { IResult, ResultMock } from "../../models/axios/Result";
import { Group } from "../../models/states/Group";
import { MyProfile } from "../../models/utils/MyProfile";
import { paletteSelections } from "../../models/utils/PaletteSelection";
import { Guid } from "../../utils/Guid";
import { IGroupRepository } from "../Interfaces/IGroupRepository";

@injectable()
export class GroupRepositoryMock implements IGroupRepository {

    GroupRepositoryMock() {

    }

    GetGroup(profile: MyProfile, id: string): Promise<IResult<Group>> {
        return new Promise((resolve) => {
            var list = this.List()
                .filter(x => x.GroupId === id);
            var target = list.length > 0 ? new ResultMock(list[0]) : new ResultMock(null);
            resolve(target);
        });
    }

    GetGroups(profile: MyProfile): Promise<IResult<Array<Group>>> {
        return new Promise((resolve) => {
            var list = new ResultMock(this.List());
            resolve(list);
        });
    }

    private List(): Array<Group> {
        const groupHeader = "group";
        const GroupMock: Array<Group> = [
            { GroupId: Guid.GetSpecifyGuid(groupHeader, 1), Name: "My Group", Description: "",
                Color: paletteSelections[0].color, OrganizationId: "1", IsViewable: true, IsEditable: true, },
            { GroupId: Guid.GetSpecifyGuid(groupHeader, 2), Name: "Search Department",  Description: "",
                Color: paletteSelections[1].color, OrganizationId: "1", IsViewable: true, IsEditable: true,  },
            { GroupId: Guid.GetSpecifyGuid(groupHeader, 3), Name: "Analysis Department 1", Description: "",
                Color: paletteSelections[2].color, OrganizationId: "2", IsViewable: true, IsEditable: false, },
            { GroupId: Guid.GetSpecifyGuid(groupHeader, 4), Name: "Analysis Department 2", Description: "",
                Color: paletteSelections[2].color, OrganizationId: "2", IsViewable: false, IsEditable: false, },
        ]
        return GroupMock;
    }
}