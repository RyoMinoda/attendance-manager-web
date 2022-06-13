import { createContext } from "react";
import { defaultMyProfile, MyProfile } from "./MyProfile"

export type IUserParametersContext = {
    MyProfile: MyProfile
}

export const defaultUserParameters: IUserParametersContext = {
    MyProfile: defaultMyProfile
}

export const UserParametersContext = createContext<IUserParametersContext>(defaultUserParameters);