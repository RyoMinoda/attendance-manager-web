import { Dictionary, KeyValue } from "../../../../utils/Dictionary";

export const DashboardPeriod = {
    Day: "Day",
    ThreeDays: "3 days",
    FiveDays: "5 days",
} as const;

export type DashboardPeriodType = typeof DashboardPeriod[keyof typeof DashboardPeriod];

export const DashboardPeriods = Object.values(DashboardPeriod);

const DashboardPeriodIndexes: Array<KeyValue<number>> = [
    { key: DashboardPeriod.Day, value: 1 },
    { key: DashboardPeriod.ThreeDays, value: 3 },
    { key: DashboardPeriod.FiveDays, value: 5 },
];

export const DashboardPeriodIndexDictionary = new Dictionary(DashboardPeriodIndexes);