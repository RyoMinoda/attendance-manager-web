import { Result, ResultMock } from "../../models/axios/Result";
import { UserDetail } from "../../models/states/UserDetail";
import { MyConfig } from "../../models/utils/MyConfig";
import { Color } from "../../models/utils/PaletteSelection";
import { Guid } from "../../utils/Guid";
import { IUserDetailRepository } from "../Interfaces/IUserDetailRepository";

export class UserDetailRepositoryMock implements IUserDetailRepository {
    GetUserDetail(config: MyConfig): Promise<Result<UserDetail>> {
        return new Promise((resolve) => {
            const result = new ResultMock(this.GetItem());
            resolve(result);
        });
    }

    private GetItem() {
        const userDetail: UserDetail = {
            Id: Guid.NewGuid(),
            Name: "Default Naming",
            Phone: "080-0000-0000",
            Email: "informationinfo@xxxxxxxxx.xxx.xxxx",
            Birth: new Date(1991, 10, 19),
            IndividualNumbers: [
                { key: "Student ID", value: "AB212-23-4323" }
            ],
            Pictiure: null,
            Color: Color.Red,
            Note: "Analytical skills are a wide-ranging set of professional qualities that include the ability to think critically, analyze data, make difficult decisions, and solve complex proble",
        }
        return userDetail;
    }
}