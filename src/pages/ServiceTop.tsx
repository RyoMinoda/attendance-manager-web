import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import TimelineServiceCard, { TimelineServiceCardProps } from "../components/molecules/service_card/TimelineServiceCard";
import GuestLayout from "../components/templates/GuestLayout";
import { UiParametersContext } from "../models/utils/UiParametersContext";
import { useWindowSize } from "../models/utils/WindowLayout";


const ServiceTop = () => {
    const WindowLayout = useWindowSize();
    const uiParameters = useContext(UiParametersContext);
    const { Palette } = uiParameters;
    const mainWindowWidth = 900;
    const outerMarginLR = (WindowLayout.width - mainWindowWidth) / 8 / 2;
    const mainWinodowHeight = WindowLayout.height - uiParameters.Layout.TopBarHeight;
    const titleHeight = 45;
    const innerMarginTB = 5;
    const innerMarginLR = mainWindowWidth * 0.05 / 8;
    const innerWidth = mainWindowWidth - 2 * innerMarginLR * 8;
    const timelineCardHeight = 350;
    const timelineCardProps: TimelineServiceCardProps = {
        marginTB: innerMarginTB,
        marginLR: innerMarginLR,
        width: innerWidth,
        height: timelineCardHeight,
        titleHeight,
    };
    return (
        <GuestLayout>
            <Box 
                marginLeft={outerMarginLR} 
                marginRight={outerMarginLR} 
                width={mainWindowWidth} 
                height={mainWinodowHeight}>
                <Grid container width={mainWindowWidth}>
                    <Grid item width={mainWindowWidth}>
                        <TimelineServiceCard props={timelineCardProps} />
                    </Grid>
                    <Grid item width={mainWindowWidth}>

                    </Grid>
                </Grid>
            </Box>
        </GuestLayout>
    );
}

export default ServiceTop;