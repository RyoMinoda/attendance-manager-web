import { DashboardMembersFilterUnion } from "../../components/atoms/selector/enum/DashboardMembersFilterType";
import { Group } from "./Group";


export type Member = {
    MemberId: string,
    GroupIds: Array<string>,
    Name: string,
    Online: boolean,
}

export class MemberArray {
    private members: Array<Member>;
    private groups: Array<Group>;

    constructor(members: Array<Member>, groups: Array<Group>) {
        this.members = members;
        this.groups = groups;
    }
    
    orderby(key: string): Member[] {
        switch (key) {
            case DashboardMembersFilterUnion.Group:
                return this.members.sort((a, b) => {
                    const groupAs = this.groups.filter(x => a.GroupIds.indexOf(x.GroupId) > -1);
                    const groupBs = this.groups.filter(x => b.GroupIds.indexOf(x.GroupId) > -1);
                    if (groupAs.length > 0 && groupBs.length > 0) {
                        return groupAs[0].Name.localeCompare(groupBs[0].Name);
                    }
                    return 0;  
                });
            case DashboardMembersFilterUnion.Name:
                return this.members.sort((a, b) => {
                    return a.Name.localeCompare(b.Name);
                });
            case DashboardMembersFilterUnion.Active:
                return this.members.sort((a, b) => {
                    return a.Online ? -1 : b.Online ? 1 : -1;
                });

        }
        return this.members;
    }
}