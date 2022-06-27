import { createContext } from "react";
import { defaultMyCalendar, MyCalendar } from "./MyCalendar";
import { defaultMyProfile, MyProfile } from "./MyProfile"

export type IUserParametersContext = {
    MyProfile: MyProfile,
    MyCalendar: MyCalendar, 
}

export const defaultUserParameters: IUserParametersContext = {
    MyProfile: defaultMyProfile,
    MyCalendar: defaultMyCalendar
}

export const UserParametersContext = createContext<IUserParametersContext>(defaultUserParameters);