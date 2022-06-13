import { Box, Grid } from "@mui/material";
import { Schedule } from "../../../models/states/Schedule";
import { DashboardPeriodType } from "../../atoms/button_group/enums/DashboardPeriodType";
import DashboardScheduleCalendar, { DashboardScheduleCalendarProps } from "../../atoms/calendar/DashboardScheduleCalendar";
import DashboardScheduleContents, { DashboardScheduleContentsProps } from "../../atoms/calendar/DashboardScheduleContents";
import DashboardScheduleHeader, { DashboardScheduleHeaderProps } from "../../atoms/calendar/DashboardScheduleHeader";

export type DashboardScheduleProps = {
    width: number,
    height: number,
    period: DashboardPeriodType,
    date: Date,
    setDate: (date: Date) => void;
    schedules: Array<Schedule>,
}

const DashboardSchedule = ({ props }: { props: DashboardScheduleProps }) => {
    const { width, height, period, date, setDate, schedules } = props;
    const sideMargin = 4.0;
    const columnHeight = height * 0.18;
    const contentHeight = height - columnHeight;
    const boardWidth = width - 2 * 8 * sideMargin;
    const calendarWidth = boardWidth * 0.25;
    const scheduleWidth = boardWidth - calendarWidth;
    const dashboardCalendarProps: DashboardScheduleCalendarProps = {
        width: calendarWidth,
        height: height,
        date, setDate
    }
    const headerProps: DashboardScheduleHeaderProps = {
        height: columnHeight,
        width: scheduleWidth,
        date, setDate,
        period,
        sideMargin: 1.0,
        timelineWidthRate: 0.15
    }
    const contentsProps: DashboardScheduleContentsProps = {
        ...headerProps,
        height: contentHeight,
        schedules,
    }
    return (
        <Box width={boardWidth} height={height} marginLeft={sideMargin}>
            <Grid container>
                <Grid item height={height} width={calendarWidth}>
                    <DashboardScheduleCalendar props={dashboardCalendarProps} />
                </Grid>
                <Grid item height={height} width={scheduleWidth}>
                    <Grid container height={height} width={scheduleWidth}>
                        <Grid item height={columnHeight} width={scheduleWidth}>
                            <DashboardScheduleHeader props={headerProps} />
                        </Grid>
                        <Grid item height={contentHeight} width={scheduleWidth}>
                            <DashboardScheduleContents props={contentsProps} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DashboardSchedule;