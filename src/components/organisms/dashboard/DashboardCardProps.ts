import { Schedule } from "../../../models/states/Schedule"

export type DashboardCardProps = {
    width: number,
    height: number,
    headerHeight: number,
    headerFontSize: number,
    gridMarginTB: number,
    headerMarginLeft: number,
    innerContainerTopBottomMargin: number,
    innerContainerLeftRightMargin: number,
    schedules: Array<Schedule>,
    setSchedules: React.Dispatch<React.SetStateAction<Schedule[]>>
}
