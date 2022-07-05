import { Guid } from "../../utils/Guid"

export type UserDetail = {
    Id: string,
    Name: string,
    Phone: string,
    Email: string,
}

export const defaultUserDetail: UserDetail = {
    Id: Guid.NewGuid(),
    Name: "",
    Phone: "",
    Email: "",
}