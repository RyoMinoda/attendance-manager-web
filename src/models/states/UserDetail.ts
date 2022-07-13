import { KeyValue } from "../../utils/Dictionary";
import { Guid } from "../../utils/Guid"

export type UserDetail = {
    Id: string,
    Name: string,
    Phone: string,
    Email: string,
    Birth: Date;
    IndividualNumbers: Array<KeyValue<string>>;
    Color: string;
    Pictiure: string | null;
    Note: string;
}

export const defaultUserDetail: UserDetail = {
    Id: Guid.NewGuid(),
    Name: "",
    Phone: "",
    Email: "",
    Birth: new Date(),
    IndividualNumbers: [],
    Color: "",
    Pictiure: null,
    Note: "",
}

export class UserDetailClass implements UserDetail {
    Id: string;
    Name: string;
    Phone: string;
    Email: string;
    Birth: Date;
    IndividualNumbers: KeyValue<string>[];
    Color: string;
    Note: string;
    Pictiure: string | null;

    constructor(userDetail: UserDetail) {
        this.Id = userDetail.Id;
        this.Name = userDetail.Name;
        this.Phone = userDetail.Phone;
        this.Email = userDetail.Email;
        this.Birth = userDetail.Birth;
        this.IndividualNumbers = userDetail.IndividualNumbers;
        this.Pictiure = userDetail.Pictiure;
        this.Color = userDetail.Color;
        this.Note = userDetail.Note;
    }
}