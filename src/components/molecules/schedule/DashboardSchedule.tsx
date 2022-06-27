import { Box, Grid } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { Schedule } from "../../../models/states/Schedule";
import { DashboardPeriodType } from "../../atoms/button_group/enums/DashboardPeriodType";
import DashboardScheduleCalendar, { DashboardScheduleCalendarProps } from "../../atoms/calendar/DashboardScheduleCalendar";
import DashboardScheduleContents, { DashboardScheduleContentsProps } from "../../atoms/calendar/DashboardScheduleContents";
import DashboardScheduleHeader, { DashboardScheduleHeaderProps } from "../../atoms/calendar/DashboardScheduleHeader";
import DashboardScheduleLines from "../../atoms/calendar/DashboardScheduleLines";
import DashboardScheduleScroller from "../../atoms/calendar/DashboardScheduleScroller";

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
    const [ scrollTop, setScrollTop ] = useState(0);
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
        timelineWidthRate: 0.15,
        borderWidth: 1,
    }
    const contentsProps: DashboardScheduleContentsProps = {
        ...headerProps,
        height: contentHeight,
        marginTop: 2,
        schedules, scrollTop,
        hours: 25,  
        setScrollTop, 
        hourHeight: contentHeight / 2.5,
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
                        <Grid item height={contentHeight} width={scheduleWidth} position="relative">
                            <Box position="absolute">
                                <DashboardScheduleLines props={contentsProps} />
                            </Box>
                            <Box position="absolute">
                                <DashboardScheduleContents props={contentsProps} />
                            </Box>
                            <Box position="absolute">
                                <DashboardScheduleScroller props={contentsProps} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DashboardSchedule;