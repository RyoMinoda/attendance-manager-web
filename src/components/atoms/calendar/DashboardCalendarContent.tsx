import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { GetCalendarDateObjects, GetCalendarMap } from "../../../utils/CalendarDates";

export type DashboardCalendarContentProps = {
    width: number,
    height: number,
    date: Date
}

const DashboardCalendarContent = ({ props }: { props: DashboardCalendarContentProps }) => {
    const { width, height, date } = props;
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
                                    <Button sx={{ 
                                        width:  weekHeight, 
                                        height: weekHeight, 
                                        paddingBottom: 0.2,
                                        minHeight: 0, 
                                        minWidth: 0, 
                                        color: Palette.text.primary, 
                                        borderRadius: weekHeight,
                                        background: backgroundColor
                                    }}>
                                        {targetDate[0].date.getDate()}
                                    </Button>
                                }

                                return (
                                    <Grid item 
                                        key={"weekday" + i + "day" + d}
                                        sx={{ width: dayWidth, height: weekHeight }}    
                                    >
                                        {Component}
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default DashboardCalendarContent;