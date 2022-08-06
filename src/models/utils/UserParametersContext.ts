import { createContext } from "react";
import { defaultMyCalendar, MyCalendar } from "./MyCalendar";
import { defaultMyConfig, MyConfig } from "./MyConfig"

export type IUserParametersContext = {
    MyConfig: MyConfig,
    MyCalendar: MyCalendar, 
}

export const defaultUserParameters: IUserParametersContext = {
    MyConfig: defaultMyConfig,
    MyCalendar: defaultMyCalendar
}

export const UserParametersContext = createContext<IUserParametersContext>(defaultUserParameters);