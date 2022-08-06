import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { container } from "tsyringe";
import AttendanceDashboardCard from "../components/organisms/dashboard/AttendanceDashboardCard";
import { DashboardCardProps } from "../components/organisms/dashboard/DashboardCardProps";
import GetStartedDashboardCard from "../components/organisms/dashboard/GetStartedDashboardCard";
import MembersDashboardCard from "../components/organisms/dashboard/MembersDashboardCard";
import NotificationDashboardCard from "../components/organisms/dashboard/NotificationDashboardCard";
import TimeScheduleDashboardCard from "../components/organisms/dashboard/TimeScheduleDashboardCard";
import MemberLayout, { MemberLayoutProps } from "../components/templates/MemberLayout";
import { Schedule } from "../models/states/Schedule";
import { Path } from "../models/utils/PathType";
import { UiParametersContext } from "../models/utils/UiParametersContext";
import { UserParametersContext } from "../models/utils/UserParametersContext";
import { useWindowSize } from "../models/utils/WindowLayout";
import { ScheduleRepository } from "../repositories/ScheduleRepository";

const DashboardTop = () => {
    const WindowLayout = useWindowSize();
    const [ screenHeight, setScreenHeight ] = useState<number>(WindowLayout.width);
    const [ schedules, setSchedules ] = useState<Array<Schedule>>(Array<Schedule>());
    const [ error, setError ] = useState<boolean>(false);
    const memberLayoutProps: MemberLayoutProps = {
        breadcrumbLinks: [ Path.DashboardTop ],
        height: screenHeight
    }
    const windowSize = useWindowSize();
    const { Layout, FontSize } = useContext(UiParametersContext);
    const { MyConfig } = useContext(UserParametersContext);
    const sideMargin = 3;
    const marginTop = 3;
    const notificationHeight = 140;
    const getStartedHeight = 160;
    const timeScheduleHeight = 330;
    const membersHeight = 340;
    const attendanceDashboardHeight = 300;
    const headerHeight = 50;
    const headerFontSize = FontSize.large;
    const cardWidth = Layout.MainAreaWidth - sideMargin * 2 * 8;
    const headerMarginLeft = 4;
    const commonDashboardCardProps: DashboardCardProps = {
        width: cardWidth, height: 0,
        headerHeight, headerFontSize,
        gridMarginTB: 0.8, headerMarginLeft,
        innerContainerTopBottomMargin: 1.5,
        innerContainerLeftRightMargin: 3.0,
        schedules, setSchedules
    }
    const notificationCardProps: DashboardCardProps = {
        ...commonDashboardCardProps,
        height: notificationHeight,
    }
    const getStartedCardProps: DashboardCardProps = {
        ...commonDashboardCardProps,
        height: getStartedHeight
    };
    const timeScheduleCardProps: DashboardCardProps = {
        ...commonDashboardCardProps,
        height: timeScheduleHeight,
    }
    const membersCardProps: DashboardCardProps = {
        ...commonDashboardCardProps,
        height: membersHeight
    }
    const attendanceCardProps: DashboardCardProps = {
        ...commonDashboardCardProps,
        height: attendanceDashboardHeight
    }
    const commonSx = { marginLeft: sideMargin, marginRight: sideMargin, marginTop  };
    const outerSidePadding = (windowSize.width - Layout.MainAreaWidth) / 2 / 8;
    const entireHeight = notificationHeight + getStartedHeight + timeScheduleHeight + membersHeight + attendanceDashboardHeight;

    useEffect(() => {
        setScreenHeight(entireHeight);

        const scheduleRepository = container.resolve(ScheduleRepository);
        const schedulesResult = scheduleRepository.GetSchedules(MyConfig);
        schedulesResult.then((result) => {
            if(result.Data != null) {
                setSchedules(result.Data);
            }
        }).catch(() => {
            setError(true);
        });

    }, [MyConfig, entireHeight]);
    const mainWidth = windowSize.width - 2 * outerSidePadding * 8;
    
    return (
        <MemberLayout props={memberLayoutProps}>
            <Box height={entireHeight} width={mainWidth}>
                <Grid container  sx={{ marginLeft: outerSidePadding, marginRight: outerSidePadding, width: mainWidth }}>
                    <Grid item sx={{ height: notificationHeight, width: cardWidth, ...commonSx }}>
                        <NotificationDashboardCard props={notificationCardProps} />
                    </Grid>
                    <Grid item sx={{ height: getStartedHeight, width: cardWidth, ...commonSx  }}>
                        <GetStartedDashboardCard props={getStartedCardProps} />
                    </Grid>
                    <Grid item sx={{ height: timeScheduleHeight, width: cardWidth, ...commonSx }}>
                        <TimeScheduleDashboardCard props={timeScheduleCardProps} />
                    </Grid>
                    <Grid item sx={{ height: membersHeight, width: cardWidth, ...commonSx }}>
                        <MembersDashboardCard props={membersCardProps} />
                    </Grid>
                    <Grid item sx={{ height: membersHeight, width: cardWidth, ...commonSx }}>
                        <AttendanceDashboardCard props={attendanceCardProps} />
                    </Grid>
                </Grid>
            </Box>
        </MemberLayout>
    );
}

export default DashboardTop;