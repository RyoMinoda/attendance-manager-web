import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { DateObj } from "../../../utils/DateObj";
import { DashboardPeriodIndexDictionary, DashboardPeriodType } from "../button_group/enums/DashboardPeriodType";

export type DashboardScheduleHeaderProps = {
    width: number,
    height: number,
    date: Date,
    setDate: (date: Date) => void,
    period: DashboardPeriodType,
    sideMargin: number,
    timelineWidthRate: number,
    borderWidth: number
}

const DashboardScheduleHeader = ({ props }: { props: DashboardScheduleHeaderProps }) => {
    const {  width, height, date, period, timelineWidthRate, sideMargin, borderWidth } = props;
    const { FontSize, Palette } = useContext(UiParametersContext);
    const activeWidth = width - 2 * sideMargin * 8;
    const timeWidth = activeWidth * timelineWidthRate;
    const scheduleWidth = activeWidth - timeWidth;
    const dateLength = DashboardPeriodIndexDictionary.getValue(period);
    const dateLengthHalf = (dateLength - 1) / 2;
    const columnWidth = scheduleWidth / dateLength;
    const days = [ ...Array(dateLength) ].map((_, i) => {
        var dateObj = new DateObj(date);
        return dateObj.addDay(i - dateLengthHalf);
    });
    const buttonStyle: SxProps<Theme> = {
        position: 'absolute',
        width: columnWidth, 
        height: height, 
        textTransform: "none",
        color: Palette.text.secondary,
        zIndex: 1,
    }

    const top = height * 0.7 / 8;
    const bottomHeight = height - top * 8;
    const getBottomStyle = (i: number): SxProps<Theme> => {
        const borderLeftWidth = i === 0 ? borderWidth : 0;
        const borderRightWidth = i === 0 && i === dateLength ?  0 : borderWidth;
        return {
            position: 'absolute', 
            marginTop: top, 
            height: bottomHeight - 1, 
            width: columnWidth, 
            left: - borderLeftWidth,
            borderStyle: "solid",
            borderTopWidth: 0,
            borderBottomWidth: borderWidth,
            borderLeftWidth,
            borderRightWidth,
            borderColor: Palette.text.light,
            zIndex: 2
        };
    }
    const emptyBoxPaddingLeft = timeWidth / 8 - 2;
    const emptyStyle: SxProps = {
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: borderWidth,
        borderColor: Palette.text.light,
        marginLeft: emptyBoxPaddingLeft,
        width: timeWidth - emptyBoxPaddingLeft * 8,
    }
    return (
        <Grid container width={width} height={height} marginLeft={sideMargin}>
            <Grid item height={height} sx={emptyStyle}></Grid>
            <Grid item width={scheduleWidth} height={height}>
                <Grid container width={scheduleWidth} height={height}>
                    {days.map((x, i) => {
                        return (
                            <Grid item 
                                position="relative"
                                key={x.getDate().toString()}
                                width={columnWidth} 
                                height={height}>
                                <Box sx={buttonStyle} display="flex" alignItems="center" justifyContent="center">
                                    <Typography fontSize={FontSize.large}>
                                        {x.getDate().getDate()}
                                    </Typography>
                                </Box>
                                <Box sx={getBottomStyle(i)}>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>

    );
}

export default DashboardScheduleHeader;