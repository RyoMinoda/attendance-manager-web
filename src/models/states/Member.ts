import { DashboardMembersFilterUnion } from "../../components/atoms/selector/enum/DashboardMembersFilterType";
import { Group } from "./Group";


export type Member = {
    Id: string,
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
                    return a.Name.localeCompare(b.Name);  
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