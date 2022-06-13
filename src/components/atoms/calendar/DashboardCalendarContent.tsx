import { Box, Button, Grid } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { getButtonHoverAndActiveStyle } from "../../../styles/buttonStyles";
import { GetCalendarDateObjects, GetCalendarMap } from "../../../utils/CalendarDates";

export type DashboardCalendarContentProps = {
    width: number,
    height: number,
    date: Date,
    setDate: (date: Date) => void;
}

const DashboardCalendarContent = ({ props }: { props: DashboardCalendarContentProps }) => {
    const { width, height, date, setDate } = props;
    const { Palette } = useContext(UiParametersContext);
    const daysMap = GetCalendarMap();
    const calendarDates = GetCalendarDateObjects(date);
    const rowCount = calendarDates[calendarDates.length - 1].row;
    return (
        <Grid container width={width} height={height}>
            {daysMap
                .filter((x, i) => i < rowCount + 1)
                .map((week, i) => {
                    const weekHeight = height / (rowCount + 2);
                    return (
                        <Grid item width={width} height={weekHeight} key={"weekday" + i}>
                            <Grid container width={width} height={weekHeight}>
                                {week
                                .map((d, w) => {
                                    const targetDate = calendarDates.filter(x => x.row === i && x.weekday === w);
                                    var Component = <></>;
                                    const dayWidth = width / week.length;
                                    if (targetDate.length !== 0) {
                                        const backgroundColor = date.getDate() === targetDate[0].date.getDate() ? Palette.primary.main : Palette.background.component;
                                        Component =                                         
                                        <Button
                                            onClick={() => setDate(targetDate[0].date)}
                                            sx={{ 
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width:  weekHeight, 
                                                height: weekHeight, 
                                                minHeight: 0, 
                                                minWidth: 0, 
                                                color: Palette.text.primary, 
                                                borderRadius: weekHeight,
                                                background: backgroundColor,
                                                ...getButtonHoverAndActiveStyle(Palette)
                                            }}
                                        >
                                            <Box>{targetDate[0].date.getDate()}</Box>
                                        </Button>
                                    }

                                    return (
                                        <Grid item 
                                            key={"weekday" + i + "day" + d}
                                            sx={{ width: dayWidth - 1, height: weekHeight }}    
                                        >
                                            {Component}
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
}

export default DashboardCalendarContent;