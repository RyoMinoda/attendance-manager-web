import "reflect-metadata";
import { injectable } from "tsyringe";
import { IResult, ResultMock } from "../../models/axios/Result";
import { Member } from "../../models/states/Member";
import { MyProfile } from "../../models/utils/MyProfile";
import { Guid } from "../../utils/Guid";
import { IMemberRepository } from "../Interfaces/IMemberRepository";

@injectable()
export class MemberRepositoryMock implements IMemberRepository {
    GetMembers(profile: MyProfile): Promise<IResult<Member[]>> {
        return new Promise((resolve) => {
            const result = new ResultMock(this.List());
            resolve(result);
        });
    }

    private List(): Array<Member> { 
        const MemberMock: Array<Member> = [
            { 
                MemberId: Guid.NewGuid(), 
                GroupIds: [Guid.GetSpecifyGuid("group", 1)], 
                Name: "Wynonna Dalton",
                Online: true, 
            },
            { 
                MemberId: Guid.NewGuid(), 
                GroupIds:  [Guid.GetSpecifyGuid("group", 1)],
                Name: "Alice Lee", 
                Online: true,
            },
            {
                MemberId: Guid.NewGuid(), 
                GroupIds: [Guid.GetSpecifyGuid("group", 2)],
                Name: "Eden Hardy",
                Online: false
            },
            {
                MemberId: Guid.NewGuid(), 
                GroupIds: [Guid.GetSpecifyGuid("group", 2)],
                Name: "Eleanor Yates",
                Online: true
            },
            {
                MemberId: Guid.NewGuid(), 
                GroupIds: [Guid.GetSpecifyGuid("group", 3)],
                Name: "Bruno Motley",
                Online: false
            }
        ];
        return MemberMock;
    }
}