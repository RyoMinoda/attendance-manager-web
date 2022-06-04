import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { DateObj } from "../../../utils/DateObj";
import { DashboardPeriodIndexDictionary, DashboardPeriodType } from "../button_group/enums/DashboardPeriodType";

export type DashboardScheduleHeaderProps = {
    width: number,
    height: number,
    date: Date,
    period: DashboardPeriodType,
}

const DashboardScheduleHeader = ({ props }: { props: DashboardScheduleHeaderProps }) => {
    const {  width, height, date, period } = props;
    const { FontSize } = useContext(UiParametersContext);
    const dateLength = DashboardPeriodIndexDictionary.getValue(period);
    const dateLengthHalf = (dateLength - 1) / 2;
    const columnWidth = width / dateLength;
    const days = [ ...Array(dateLength) ].map((_, i) => {
        var dateObj = new DateObj(date);
        return dateObj.addDay(i - dateLengthHalf);
    });
    return (
        <Grid container width={width} height={height}>
            {days.map((x) => {
                return (
                    <Grid item width={columnWidth} height={height} key={x.getDate().toString()}>
                        <Button sx={{ width: columnWidth, height, textDecoration: 'none' }}>
                            <Grid container>
                                <Grid item>
                                    <Typography fontSize={FontSize.large}>
                                        {x.getDate()}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Button>
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default DashboardScheduleHeader;