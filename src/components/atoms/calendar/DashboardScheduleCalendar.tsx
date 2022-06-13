import { Box, Grid, IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import DashboardCalendarContent, { DashboardCalendarContentProps } from "./DashboardCalendarContent";

export type DashboardScheduleCalendarProps = {
    width: number,
    height: number,
    date: Date,
    setDate: (date: Date) => void;
}

const DashboardScheduleCalendar = ({ props }: { props: DashboardScheduleCalendarProps }) => {
    const { width, height, date, setDate } = props;
    const uiParameters = useContext(UiParametersContext);
    const { FontSize, Palette } = uiParameters;
    
    const sideMargin = 1;
    const marginTB = 1.5;
    const innerWidth = width - 2 * sideMargin * 8;
    const innerHeight = height - 2 * marginTB * 8;

    const monthYearHeight = innerHeight * 0.18;
    const sideButton = innerWidth * 0.13;
    const monthYearWidth = innerWidth - sideButton * 2;
    const yearHeight = monthYearHeight * 0.5;
    const yearPaddingTop = 0.3;
    const monthHeight = monthYearHeight - yearHeight;
    
    const contentHeight = innerHeight - monthYearHeight;
    const weekdayHeight = contentHeight * 0.13;
    const datesHeight = contentHeight - weekdayHeight;
    const paddingTop = 0.7;
    const weekdays = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];
    const weekdayWidth = innerWidth / 7;
    const weekdayArray = [ ...Array(7) ].map((x, i) => weekdays[i]);
    const calendarProps: DashboardCalendarContentProps = {
        width: innerWidth,
        height: datesHeight,
        date,
        setDate
    };

    const addMonth = () => {
        var year = date.getFullYear();
        var month = date.getMonth();
        if (month !== 11) {
            setDate(new Date(year, month + 1, 1));
        } else {
            setDate(new Date(year + 1, 0, 1));
        }
    };
    const minusMonth = () => {
        var year = date.getFullYear();
        var month = date.getMonth();
        if (month !== 0) {
            setDate(new Date(year, month - 1, 1));
        } else {
            setDate(new Date(year - 1, 11, 1));
        }
    };
    return (
        <Box width={innerWidth} height={innerHeight} marginTop={marginTB} marginBottom={marginTB}
             marginLeft={sideMargin} marginRight={sideMargin}>
            <Grid container width={innerWidth} height={innerHeight}>
                <Grid item width={innerWidth} height={monthYearHeight}>
                    <Grid container width={innerWidth} height={monthYearHeight}>
                        <Grid item sx={{ paddingTop }}>
                            <IconButton onClick={() => minusMonth()}  sx={{ width: sideButton, height: monthYearHeight }}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </Grid>
                        <Grid item width={monthYearWidth}>
                            <Grid container>
                                <Grid item 
                                    height={yearHeight - 8 * yearPaddingTop} width={monthYearWidth} 
                                    sx={{ paddingTop: yearPaddingTop, fontSize: FontSize.small, textAlign: 'center' }}>
                                    {date.getFullYear()}
                                </Grid>
                                <Grid item height={monthHeight} width={monthYearWidth} sx={{ textAlign: 'center', fontSize: FontSize.large }}>
                                    {date.getMonth() + 1}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ paddingTop }}>
                            <IconButton onClick={() => addMonth()} sx={{ width: sideButton, height: monthYearHeight }}>
                                <ChevronRightIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item width={innerWidth} height={contentHeight} marginLeft={0.2}>
                    <Grid container width={innerWidth} height={contentHeight}>
                        <Grid item height={weekdayHeight} width={innerWidth}>
                            <Grid container 
                                height={weekdayHeight - 2} 
                                width={innerWidth}>
                                {weekdayArray.map((x, i) => {
                                    return (
                                        <Grid item 
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            key={"weekday" + i} 
                                            width={weekdayWidth - 1} 
                                            height={weekdayHeight} 
                                            sx={{ fontSize: FontSize.smaller, color: Palette.text.secondary }}>
                                            {x}
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                        <Grid item height={datesHeight} width={innerWidth}>
                            <DashboardCalendarContent props={calendarProps} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DashboardScheduleCalendar;