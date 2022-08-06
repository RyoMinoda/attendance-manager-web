export type MyConfig = {
    Id: string,
    Name: string,
    IsManager: boolean,
    UserId: string,
    UserPassword: string,
}

export const defaultMyConfig: MyConfig = {
    Id: "00000-00000-0000-0000001",
    Name: "",
    IsManager: true,
    UserId: "SampleId",
    UserPassword: "SamplePassword"
}