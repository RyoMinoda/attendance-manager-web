import { Box, Button, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { isSameDate } from "../../../utils/DateExtensions";
import { DashboardPeriodIndexDictionary } from "../button_group/enums/DashboardPeriodType";
import { DashboardScheduleContentsProps } from "./DashboardScheduleContents";

const DashboardScheduleLines = ({ props } : { props: DashboardScheduleContentsProps }) => {
    const { width, height, sideMargin, timelineWidthRate, marginTop, period, hours, scrollTop, schedules, date, hourHeight } = props;
    const { Palette, FontSize } = useContext(UiParametersContext);
    const entireWidth = width - 2 * sideMargin * 8;
    const spaceWidth = entireWidth * timelineWidthRate;
    const mainWidth = entireWidth - spaceWidth;
    const dateLength = DashboardPeriodIndexDictionary.getValue(period);
    const getGridItemStyle = (date: Date, span: number): SxProps<Theme> => {
        const row = date.getHours();
        const selection = Palette.selection[11];
        const color = selection.isDarkColor ? "#FFF" : "#333";
        const height = span / 60 * hourHeight - 6;
        const padding = 0.5;
        return {
            position: "absolute",
            height,
            width: mainWidth / dateLength - 10,
            background: selection.color,
            top: - scrollTop + marginTop * 8 + row * hourHeight + 3,
            color,
            left: 5,
            overflow: "hidden",
            minHeight: 0,
            minWidth: 0,
            textTransform: "none"
        };
    }
    const fontSize = dateLength < 4 ? FontSize.normal : FontSize.smaller;
    return (
        <Grid container
            width={entireWidth} 
            height={height} 
            marginLeft={sideMargin} >
            <Grid item width={spaceWidth} height={height}></Grid>
            <Grid item 
                width={mainWidth} 
                height={height} 
                sx={{ position: "relative", overflowY: 'scroll', overflowX: 'hidden', scrollbarWidth: 'none' }}>
                <Box width={mainWidth} height={hourHeight * hours}>
                    {schedules
                        .filter(x => isSameDate(x.ScheduleFor, date))
                        .map((x, i) => 
                        {
                            return (
                                <Button sx={getGridItemStyle(x.ScheduleFor, x.MinuteSpan)} key={"gridItem" + i}>
                                    <Typography fontSize={fontSize}>
                                        {x.Name}
                                    </Typography>
                                </Button>
                            );
                        })
                    }
                </Box>
            </Grid>
        </Grid>
    );
}

export default DashboardScheduleLines;