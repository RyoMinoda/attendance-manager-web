import { Card, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { container } from "tsyringe";
import { Attendance } from "../../../models/states/Attendance";
import { Schedule } from "../../../models/states/Schedule";
import { Timeline } from "../../../models/states/Timeline";
import { UserParametersContext } from "../../../models/utils/UserParametersContext";
import { AttendanceRepository } from "../../../repositories/AttendanceRepository";
import { ScheduleRepository } from "../../../repositories/ScheduleRepository";
import { TimelineRepository } from "../../../repositories/TimelineRepository";
import DashboardAttendanceHistories, { DashboardAttendanceHistoriesProps } from "../../molecules/attendances/DashboardAttendanceHistories";
import DashboardAttendanceSchedules, { DashboardAttendanceSchedulesProps } from "../../molecules/attendances/DashboardAttendanceSchedules";
import { DashboardCardProps } from "./DashboardCardProps";

const AttendanceDashboardCard = ({ props }: { props: DashboardCardProps }) => {
    const { width, height, headerHeight, headerFontSize, 
        gridMarginTB, innerContainerTopBottomMargin, innerContainerLeftRightMargin } = props;
    const [ schedules, setSchedules ] = useState<Array<Schedule>>(Array<Schedule>());
    const [ timelines, setTimelines ] = useState<Array<Timeline>>(Array<Timeline>());
    const [ attendances, setAttendances ] = useState<Array<Attendance>>(Array<Attendance>());
    const [ timelineId, setTimelineId ] = useState<string>("");
    const [ error, setError ] = useState<boolean>(false);
    const { MyProfile } = useContext(UserParametersContext);
    useEffect(() => {
        const scheduleRepository = container.resolve(ScheduleRepository);
        const attendanceRepository = container.resolve(AttendanceRepository);
        const timelineRepository = container.resolve(TimelineRepository);

        const schedulesPromise = scheduleRepository.GetSchedules(MyProfile);
        schedulesPromise.then((result) => {
            if (result.Data != null) {
                setSchedules(result.Data);
            }
        }).catch(() => {
            setError(true);
        });
        const timelinePromise = timelineRepository.GetTimelines(MyProfile);
        timelinePromise.then((result) => {
            if (result.Data != null) {
                setTimelines(result.Data);
                if (result.Data.length > 0) {
                    setTimelineId(result.Data[0].Id);
                }
            } 
        }).catch(() => {
            setError(true);
        });
        const attendancePromise = attendanceRepository.GetAttendances(MyProfile);
        attendancePromise.then((result) => {
            if (result.Data != null) {
                setAttendances(result.Data);
            }
        }).catch(() => {
            setError(true);
        });

    }, [ MyProfile ])
    const containerHeight = height - 2 * gridMarginTB * 8;
    const contentHeight = containerHeight - headerHeight;
    const innerContainerHeight = contentHeight - 2 * innerContainerTopBottomMargin * 8;
    const innerContainerWidth = width - 2 * innerContainerLeftRightMargin * 8;
    const spacerWidth = innerContainerWidth * 0.05;
    const timelineWidth = innerContainerWidth * 0.35;
    const attendanceWidth = innerContainerWidth - timelineWidth - spacerWidth * 2;
    const timelineProps: DashboardAttendanceSchedulesProps = {
        width: timelineWidth,
        height: innerContainerHeight,
        schedules, timelines, timelineId,
        setTimelineId
    }
    const attendanceProps: DashboardAttendanceHistoriesProps = {
        width: attendanceWidth,
        height: innerContainerHeight,
        schedules, timelineId, attendances
    }
    return (
        <Card sx={{ width, height }}>
            <Grid container sx={{ width, height: containerHeight, marginTop: gridMarginTB, marginBottom: gridMarginTB }}>
                <Grid item sx={{ height: headerHeight }}  display="flex" alignItems="center">
                    <Typography fontSize={headerFontSize} marginLeft={4}>
                        Attendances
                    </Typography>
                </Grid>
                <Grid item  sx={{ height: contentHeight, width }}>
                    <Grid container width={width} 
                        height={innerContainerHeight}
                        marginLeft={innerContainerLeftRightMargin}
                        marginTop={innerContainerTopBottomMargin}>
                        <Grid item width={timelineWidth} height={innerContainerHeight}>
                            <DashboardAttendanceSchedules props={timelineProps} />
                        </Grid>
                        <Grid item width={spacerWidth} height={innerContainerHeight}>
                        </Grid>
                        <Grid item width={attendanceWidth} height={innerContainerHeight}>
                            <DashboardAttendanceHistories props={attendanceProps} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}

export default AttendanceDashboardCard;