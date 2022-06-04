import { Box, Grid } from "@mui/material";
import TimeScheduleServiceCard, { TimeScheduleServiceCardProps } from "../components/molecules/service_card/TimeScheduleServiceCard";
import GuestLayout, { GuestLayoutProps } from "../components/templates/GuestLayout";
import { useWindowSize } from "../models/utils/WindowLayout";


const ServiceTop = () => {
    const WindowLayout = useWindowSize();
    const mainWindowWidth = 900;
    const outerMarginLR = (WindowLayout.width - mainWindowWidth) / 8 / 2;
    const titleHeight = 45;
    const innerMarginTB = 5;
    const innerMarginLR = mainWindowWidth * 0.05 / 8;
    const innerWidth = mainWindowWidth - 2 * innerMarginLR * 8;
    const timeScheduleCardHeight = 360;
    const timeScheduleCardProps: TimeScheduleServiceCardProps = {
        marginTB: innerMarginTB,
        marginLR: innerMarginLR,
        width: innerWidth,
        height: timeScheduleCardHeight,
        titleHeight,
    };
    const layoutProps: GuestLayoutProps = {
        height: timeScheduleCardHeight
    }
    return (
        <GuestLayout props={layoutProps}>
            <Box 
                marginLeft={outerMarginLR} 
                marginRight={outerMarginLR}>
                <Grid container width={mainWindowWidth}>
                    <Grid item width={mainWindowWidth} height={timeScheduleCardHeight + titleHeight}>
                        <TimeScheduleServiceCard props={timeScheduleCardProps} />
                    </Grid>
                    <Grid item width={mainWindowWidth}>

                    </Grid>
                </Grid>
            </Box>
        </GuestLayout>
    );
}

export default ServiceTop;