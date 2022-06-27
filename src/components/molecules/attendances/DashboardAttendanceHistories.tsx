import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { Attendance, AttendanceUnion, DailyAttendanceClass } from "../../../models/states/Attendance";
import { Schedule } from "../../../models/states/Schedule";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { UserParametersContext } from "../../../models/utils/UserParametersContext";
import { formatDate, formatDateOnly, formatTime } from "../../../utils/DateExtensions";

export type DashboardAttendanceHistoriesProps = {
    width: number,
    height: number,
    schedules: Array<Schedule>,
    timelineId: string,
    attendances: Array<Attendance>
}

const DashboardAttendanceHistories = ({ props }: { props: DashboardAttendanceHistoriesProps }) => {
    const { width, height, schedules, timelineId, attendances } = props;
    const { FontSize, Palette } = useContext(UiParametersContext);
    const { MyCalendar } = useContext(UserParametersContext);
    const headerHeight = height / 11;
    const contentHeight = height - headerHeight;
    const itemHeight = contentHeight / 7;
    const targetSchedules = schedules.filter(x => x.TimelineId === timelineId);
    const indexWidth = width * 0.15;
    const inOutWidth = width * 0.2;
    const inOutMargin = 0.5;
    const titleWidth = width - indexWidth - 2 * inOutWidth;
    const indexStyle: SxProps<Theme> = {
        width: indexWidth,
        height: itemHeight,
    }
    const titleStyle: SxProps<Theme> = {
        width: titleWidth,
        height: itemHeight,
    }
    const inOutStyle: SxProps<Theme> = {
        height: headerHeight, 
        width: inOutWidth - 2 * inOutMargin * 8,
        marginLeft: inOutMargin,
        borderRadius: 1,
    }
    const inOutTypographyStyle: SxProps<Theme> = {
        fontSize: FontSize.small,
        marginBottom: 0.1,
    }
    const attendanceTimeStyle: SxProps<Theme> = {
        height: itemHeight,
        width: inOutWidth
    }
    return (
        <Box width={width} height={height}>
            <Grid container>
                <Grid item sx={{ height: headerHeight, width }}>
                    <Grid container sx={{ fontSize: FontSize.smaller }}>
                        <Grid item sx={{ height: headerHeight, width: indexWidth }}></Grid>
                        <Grid item sx={{ height: headerHeight, width: titleWidth }}></Grid>
                        <Grid item sx={{ height: headerHeight, width: inOutWidth }}>
                            <Box 
                                display="flex" alignItems="center" justifyContent="center"
                                sx={{ background: Palette.secondary.lightRed, ...inOutStyle }}>
                                <Typography sx={inOutTypographyStyle}>IN</Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box 
                                display="flex" alignItems="center" justifyContent="center"
                                sx={{ background: Palette.secondary.lightBlue, ...inOutStyle }}>
                                    <Typography sx={inOutTypographyStyle}>OUT</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{ height: contentHeight, width, overflowY: 'none' }}>
                    <Grid container width={width} height={itemHeight}>
                        {targetSchedules.map(((x, i) => {
                            const targetAttendances = attendances.filter(y => y.ScheduleId === x.ScheduleId);
                            const cleared = targetAttendances.filter(y => y.AttendType === AttendanceUnion.Out);
                            const color = cleared.length > 0 ? Palette.text.primary : Palette.text.secondary;
                            const attendanceClass = new DailyAttendanceClass(attendances, x.ScheduleId);
                            return (
                                <Grid item width={width} height={itemHeight} color={color} key={i}>
                                    <Grid container>
                                        <Grid item sx={indexStyle} display="flex" alignItems="center">
                                            <Typography fontSize={FontSize.normal}>
                                                {formatDateOnly(x.ScheduleFor, MyCalendar.DateFormat)}
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={titleStyle} display="flex" alignItems="center">
                                            <Typography fontSize={FontSize.larger}>
                                                {x.Name}
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={attendanceTimeStyle} display="flex" justifyContent="center" alignItems="center">
                                            <Typography fontSize={FontSize.normal}>
                                                {formatTime(attendanceClass.getInDate())}
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={attendanceTimeStyle} display="flex" justifyContent="center" alignItems="center">
                                            <Typography fontSize={FontSize.normal}>
                                                {formatTime(attendanceClass.getOutDate())}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            );
                        }))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DashboardAttendanceHistories;