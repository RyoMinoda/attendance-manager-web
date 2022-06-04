import { Box, Grid } from "@mui/material";
import { DashboardPeriodType } from "../../atoms/button_group/enums/DashboardPeriodType";
import DashboardScheduleCalendar, { DashboardScheduleCalendarProps } from "../../atoms/calendar/DashboardScheduleCalendar";
import DashboardScheduleHeader, { DashboardScheduleHeaderProps } from "../../atoms/calendar/DashboardScheduleHeader";

export type DashboardScheduleProps = {
    width: number,
    height: number,
    period: DashboardPeriodType,
    date: Date,
    setDate: (date: Date) => void;
}

const DashboardSchedule = ({ props }: { props: DashboardScheduleProps }) => {
    const { width, height, period, date, setDate } = props;
    const column = 3;
    const sideMargin = 3.0;
    const columnHeight = height * 0.2;
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
        date,
        period
    }
    return (
        <Box width={boardWidth} height={height} marginLeft={sideMargin}>
            <Grid container>
                <Grid item height={height} width={calendarWidth}>
                    <DashboardScheduleCalendar props={dashboardCalendarProps} />
                </Grid>
                <Grid item height={height} width={scheduleWidth}>
                    <Grid container>
                        <Grid item height={columnHeight} width={scheduleWidth}>
                            <DashboardScheduleHeader props={headerProps} />
                        </Grid>
                        <Grid item height={contentHeight} width={scheduleWidth}>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DashboardSchedule;