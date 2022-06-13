import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { Schedule } from "../../../models/states/Schedule";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { DigitNumber } from "../../../utils/DigitNumber";
import { DashboardPeriodIndexDictionary, DashboardPeriodType } from "../button_group/enums/DashboardPeriodType";

export type DashboardScheduleContentsProps = {
    width: number,
    height: number,
    date: Date,
    period: DashboardPeriodType,
    timelineWidthRate: number,
    sideMargin: number,
    schedules: Array<Schedule>,
}

const DashboardScheduleContents = ({ props } : { props: DashboardScheduleContentsProps }) => {
    const { width, height, sideMargin, period, timelineWidthRate } = props;
    const innerWidth = width - 2 * 8 * sideMargin;
    const { Palette } = useContext(UiParametersContext);
    const hours = 25;
    const hoursArray = [ ...Array(hours) ];
    const dateLength = DashboardPeriodIndexDictionary.getValue(period);
    const timelineWidth = timelineWidthRate * innerWidth + 0.5;
    const scheduleWidth = innerWidth - timelineWidth;
    const hourHeight = height / (dateLength / 2  + 2);
    const commonMarginTop = 2;
    const timelineBoxMarginRight = 1;
    const timeBoxSx: SxProps<Theme> = {
        position: 'absolute',
        top: - hourHeight / 2,
        width: timelineWidth - 2.5 * 8,
        height: hourHeight,
        zIndex: 1,
    }
    const getLineBoxSx = (i: number): SxProps<Theme> => {
        var borderTopWidth = i === 0 ? 1 : 0;
        return {
            position: 'absolute',
            top: 0,
            right: 0,
            width: timelineBoxMarginRight * 8,
            height: hourHeight,
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth,
            borderColor: Palette.text.light,
            zIndex: 2,
        };
    }
    const panelWidth = scheduleWidth / dateLength;
    const panelButtonSx = (row: number, column: number): SxProps<Theme> => {
        const borderBottomWidth = row === hours - 2 ? 1 : 0;
        return {
            position: "absolute",
            width: panelWidth,
            height: hourHeight,
            top: hourHeight * row,
            borderRadius: 0,
            borderStyle: "solid",
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderLeftWidth: 0,
            borderBottomWidth,
            borderColor: Palette.text.light,
        };
    }
    return (
        <Grid container 
            width={width} 
            height={height}
            marginLeft={sideMargin}
            sx={{ overflowY: 'scroll', overflowX: 'hidden', scrollbarWidth: 'none', }}
        >
            <Grid item width={timelineWidth} marginTop={commonMarginTop}>
                {hoursArray.map((x, i) => {
                    return (
                        <Grid container key={"hour-schedule-" + i.toString()}>
                            <Grid item 
                                width={timelineWidth} 
                                height={i !== hours - 1 ? hourHeight : 10} 
                                position="relative"
                            >
                                <Box 
                                    display="flex" 
                                    alignItems="center" 
                                    justifyContent="end"
                                    sx={timeBoxSx}>
                                        <Typography>
                                            {DigitNumber.GetDigit(2, i) + ":00"}
                                        </Typography>
                                </Box>
                                {i !== hours - 1 ?  <Box sx={getLineBoxSx(i)}></Box> : <></>}
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
            {[ ...Array(dateLength) ]
                .map((_, c) => {
                return (
                    <Grid item
                        width={panelWidth} 
                        marginTop={commonMarginTop} 
                        key={"time" + c.toString()}
                    >
                        <Box position="relative">
                            {hoursArray
                                .filter((_, d) => d !== hours - 1)
                                .map((y, r) => {
                                    return (
                                        <Box 
                                            key={"col" + c.toString() + ":row" + r.toString()} 
                                            sx={panelButtonSx(r, c)}>
                                        </Box>
                                    );
                                })
                            }
                        </Box>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default DashboardScheduleContents;