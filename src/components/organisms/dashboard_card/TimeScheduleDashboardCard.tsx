import { Card, Grid,Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { container } from "tsyringe";
import { Schedule } from "../../../models/states/Schedule";
import { UserParametersContext } from "../../../models/utils/UserParametersContext";
import { ScheduleRepository } from "../../../repositories/ScheduleRepository";
import { DashboardPeriod, DashboardPeriodType } from "../../atoms/button_group/enums/DashboardPeriodType";
import PeriodSwitchButtonGroup, { PeriodSwitchButtonGroupProps } from "../../atoms/button_group/PeriodSwitchButtonGroup";
import DashboardSchedule, { DashboardScheduleProps } from "../../molecules/schedule/DashboardSchedule";
import { DashboardCardProps } from "./DashboardCardProps";


const TimeScheduleDashboardCard = ({ props }: { props: DashboardCardProps }) => {
    const [ period, setPeriod ] = useState<DashboardPeriodType>(DashboardPeriod.Day);
    const [ date, setDate ] = useState<Date>(new Date());
    const { MyProfile } = useContext(UserParametersContext);
    const [ schedules, setSchedules ] = useState<Array<Schedule>>(Array<Schedule>());
    const setTargetDate = (date: Date) => {
        setDate(date);
    }
    useEffect(() => {
        const scheduleRepository = container.resolve(ScheduleRepository);
        const schedules = scheduleRepository.GetSchedules(MyProfile);
        if (schedules.Data != null) {
            setSchedules(schedules.Data);
        }
    }, [ MyProfile ]);
    const { width, height, headerHeight, gridMarginTB, headerFontSize, headerMarginLeft, innerContainerTopBottomMargin } = props;
    const buttonGroupSx = 3;
    const containerHeight = height - 2 * gridMarginTB * 8;
    const contentHeight = containerHeight - headerHeight;
    const innerContainerHeight = contentHeight - 2 * innerContainerTopBottomMargin * 8;
    const periodSwitchProps: PeriodSwitchButtonGroupProps = {
        period, setPeriod,
        width: width * buttonGroupSx / 12,
        height: headerHeight / 2
    };
    const dashboardScheduleProps: DashboardScheduleProps = {
        width, height: innerContainerHeight, period, date, setDate: setTargetDate, schedules
    }
    return (
        <Card sx={{ width, height }}>
            <Grid container sx={{ width, height: containerHeight }} marginTop={gridMarginTB} marginBottom={gridMarginTB}>
                <Grid item height={headerHeight} width={width}>
                    <Grid container height={headerHeight} width={width}>
                        <Grid item xs={3} display="flex" alignItems="center">
                            <Typography sx={{ fontSize: headerFontSize, marginLeft: headerMarginLeft }}>
                                Schedule
                            </Typography>
                        </Grid>
                        <Grid item xs={12 - buttonGroupSx - 3}></Grid>
                        <Grid item xs={buttonGroupSx} display="flex" justifyContent="center" alignItems="center">
                            <PeriodSwitchButtonGroup props={periodSwitchProps} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item height={contentHeight} width={width} marginTop={innerContainerTopBottomMargin}>
                    <DashboardSchedule props={dashboardScheduleProps} />
                </Grid>
            </Grid>
        </Card>
    );
}

export default TimeScheduleDashboardCard;