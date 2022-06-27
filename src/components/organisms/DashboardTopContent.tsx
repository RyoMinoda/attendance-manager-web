import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { UiParametersContext } from "../../models/utils/UiParametersContext";
import { useWindowSize } from "../../models/utils/WindowLayout";
import AttendanceDashboardCard from "./dashboard_card/AttendanceDashboardCard";
import { DashboardCardProps } from "./dashboard_card/DashboardCardProps";
import GetStartedDashboardCard from "./dashboard_card/GetStartedDashboardCard";
import MembersDashboardCard from "./dashboard_card/MembersDashboardCard";
import TimeScheduleDashboardCard from "./dashboard_card/TimeScheduleDashboardCard";

export type DashboardTopContentProps = {
    setEntireHeight: React.Dispatch<React.SetStateAction<number>>
}

const DashboardTopContent = ({ props }: { props: DashboardTopContentProps }) => {
    const { setEntireHeight } = props;
    const uiParameters = useContext(UiParametersContext);
    const windowSize = useWindowSize();
    const { Layout, FontSize } = uiParameters;
    const sideMargin = 3;
    const marginTop = 3;
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
        innerContainerLeftRightMargin: 3.0
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
    const entireHeight = getStartedHeight + timeScheduleHeight + membersHeight + attendanceDashboardHeight;
    useEffect(() => {
        setEntireHeight(entireHeight);
    });
    const mainWidth = windowSize.width - 2 * outerSidePadding * 8;
    return (
        <Grid container  sx={{ marginLeft: outerSidePadding, marginRight: outerSidePadding, width: mainWidth }}>
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
    )
}

export default DashboardTopContent;