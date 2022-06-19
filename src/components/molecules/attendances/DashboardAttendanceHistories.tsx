import { Box, Grid } from "@mui/material";
import { Attendance } from "../../../models/states/Attendance";
import { Schedule } from "../../../models/states/Schedule";
import { Timeline } from "../../../models/states/Timeline";

export type DashboardAttendanceHistoriesProps = {
    width: number,
    height: number,
    schedules: Array<Schedule>,
    timelineId: string,
    attendances: Array<Attendance>
}

const DashboardAttendanceHistories = ({ props }: { props: DashboardAttendanceHistoriesProps }) => {
    const { width, height, schedules, timelineId } = props;
    const itemHeight = height / 8;
    const targetSchedules = schedules.filter(x => x.TimelineId === timelineId);
    return (
        <Box width={width} height={height}>
            <Grid container width={width} height={itemHeight}>
                {targetSchedules.map((x => {
                    return (
                        <Grid item width={width} height={itemHeight}>
                            {x.Name}
                        </Grid>
                    );
                }))}
            </Grid>
        </Box>
    );
}

export default DashboardAttendanceHistories;