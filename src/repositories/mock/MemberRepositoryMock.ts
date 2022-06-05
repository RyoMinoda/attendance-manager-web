import "reflect-metadata";
import { injectable } from "tsyringe";
import { IResult, ResultMock } from "../../models/axios/Result";
import { Member } from "../../models/states/Member";
import { Guid } from "../../utils/Guid";
import { IMemberRepository } from "../Interfaces/IMemberRepository";

@injectable()
export class MemberRepositoryMock implements IMemberRepository {
    GetMembers(): IResult<Member[]> {
        return new ResultMock(this.List());
    }

    private List(): Array<Member> { 
        const MemberMock: Array<Member> = [
            { 
                Id: Guid.NewGuid(), 
                GroupId: Guid.GetSpecifyGuid("group", 1), 
                Name: "Wynonna Dalton",
                Online: true, 
            },
            { 
                Id: Guid.NewGuid(), 
                GroupId:  Guid.GetSpecifyGuid("group", 1),
                Name: "Alice Lee", 
                Online: true,
            },
            {
                Id: Guid.NewGuid(), 
                GroupId:  Guid.GetSpecifyGuid("group", 2),
                Name: "Wynonna Dalton",
                Online: false
            }
        ];
        return MemberMock;
    }
}