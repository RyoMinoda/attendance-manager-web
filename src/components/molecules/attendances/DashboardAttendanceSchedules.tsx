import { Box, Button, Grid, Typography, SxProps, Theme } from "@mui/material";
import { useContext } from "react";
import { Schedule } from "../../../models/states/Schedule";
import { Timeline, TimelineClass } from "../../../models/states/Timeline";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { getButtonHoverAndActiveStyle } from "../../../styles/buttonStyles";

export type DashboardAttendanceSchedulesProps = {
    width: number,
    height: number,
    schedules: Array<Schedule>,
    timelines: Array<Timeline>,
    timelineId: string,
    setTimelineId: React.Dispatch<React.SetStateAction<string>>
}

const DashboardAttendanceSchedules = ({ props }: { props: DashboardAttendanceSchedulesProps }) => {
    const { width, height, schedules, timelines, timelineId, setTimelineId } = props;
    const { FontSize, Palette } = useContext(UiParametersContext);
    const itemCount = 6;
    const paddingTop = 2;
    const contentHeight = height - paddingTop * 8; 
    const itemHeight = contentHeight / itemCount;
    const sidePadding = 1;
    const buttonWidth = width - 2 * sidePadding * 8;
    const countWidth = buttonWidth * 0.15;
    const countWHMiner = countWidth < itemHeight ? countWidth : itemHeight;
    const buttonStyle: SxProps<Theme> = {
        width: buttonWidth, 
        height: itemHeight, 
        minHeight: 0, minWidth: 0,
        padding: 0, margin: 0,
        textTransform: 'none',
        textDecoration: 'none',
        color: Palette.text.primary,
        ...getButtonHoverAndActiveStyle(Palette)
    };
    const countCircleWidth = countWHMiner * 0.65;
    const flequecyStyle: SxProps<Theme> = {
        width: countWidth,
        height: itemHeight
    }
    const textStyle: SxProps<Theme> = {
        width: buttonWidth -  countWidth * 2.1,
        height: itemHeight,
        paddingLeft: 1,
    }
    const scheduleCountStyle: SxProps<Theme> = {
        width: countWidth,
        height: itemHeight, 
    }
    const onClickHandler = (timeline: Timeline): void => {
        setTimelineId(timeline.Id);
    }
    return (
        <Box sx={{ width, height: contentHeight, overflowY: 'scroll', scrollbarWidth: 'none', paddingLeft: sidePadding, paddingTop }}>
            <Grid container sx={{ width, height: itemHeight * timelines.length }}>
                {timelines.map((tl, i) => {
                    const timelineObj = new TimelineClass(tl);
                    const done = schedules.filter(x => x.TimelineId === tl.Id && x.IsCarried);
                    const overed = schedules.filter(x => x.TimelineId === tl.Id && x.IsOver);
                    const bgcolor = tl.Id === timelineId ? Palette.background.main : Palette.background.component;
                    const color = tl.Id === timelineId ? Palette.primary.dark : Palette.text.light;
                    return (
                        <Grid item
                            key={"schedule_item" + i.toString()}>
                            <Button sx={{ ...buttonStyle, background: bgcolor }} onClick={() => onClickHandler(tl)}>
                                <Grid container sx={{ overflow: 'hidden' }}>
                                    <Grid item sx={flequecyStyle} display="flex" alignItems="center" justifyContent="center">
                                        <Box 
                                            sx={{ width: countCircleWidth, height: countCircleWidth, borderRadius: countCircleWidth }} 
                                            display="flex" alignItems="center" justifyContent="center" bgcolor={timelineObj.getColor(Palette)}>
                                            <Typography fontSize={FontSize.minimum} color="white">
                                                {timelineObj.getFrequencyString()}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item sx={textStyle} display="flex" alignItems="center">
                                        <Typography fontSize={FontSize.larger} color={color}>
                                            {tl.Name}
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={scheduleCountStyle} display="flex" alignItems="center" justifyContent="center">
                                        <Typography fontSize={FontSize.smaller}>
                                            {done.length.toString() + " / " + overed.length.toString()}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Button>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default DashboardAttendanceSchedules;