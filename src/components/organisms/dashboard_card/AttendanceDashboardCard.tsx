import { Box, Card, Grid, Typography } from "@mui/material";
import DashboardAttendance, { DashboardAttendanceProps } from "../../molecules/attendances/DashboardAttendance";
import { DashboardCardProps } from "./DashboardCardProps";

const AttendanceDashboardCard = ({ props }: { props: DashboardCardProps }) => {
    const { width, height, headerHeight, headerFontSize, 
        gridMarginTB, innerContainerTopBottomMargin, innerContainerLeftRightMargin } = props;
    const containerHeight = height - 2 * gridMarginTB * 8;
    const contentHeight = containerHeight - headerHeight;
    const innerContainerHeight = contentHeight - 2 * innerContainerTopBottomMargin * 8;
    const innerContainerWidth = width - 2 * innerContainerLeftRightMargin * 8;
    const attendanceProps: DashboardAttendanceProps = {
        width: innerContainerWidth,
        height: innerContainerHeight,
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
                    <Box width={width} 
                        height={innerContainerHeight}
                        marginLeft={innerContainerLeftRightMargin}
                        marginTop={innerContainerTopBottomMargin}>
                        <DashboardAttendance props={attendanceProps} />
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}

export default AttendanceDashboardCard;