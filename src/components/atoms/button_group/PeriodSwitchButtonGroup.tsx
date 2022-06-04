import { Button, ButtonGroup, SxProps, Theme } from "@mui/material";
import { useContext } from "react";
import { IUiParametersContext, UiParametersContext } from "../../../models/utils/UiParametersContext";
import { DashboardPeriods, DashboardPeriodType } from "./enums/DashboardPeriodType";

export type PeriodSwitchButtonGroupProps = {
    setPeriod: React.Dispatch<React.SetStateAction<DashboardPeriodType>>,
    period: DashboardPeriodType,
    width: number,
    height: number,
}

const PeriodSwitchButtonGroup = ({ props }: { props: PeriodSwitchButtonGroupProps }) => {
    const { period, setPeriod, width, height } = props;
    const uiParameters = useContext(UiParametersContext);
    const rightMargin = 2;
    const buttonWidth = (width - 8 * rightMargin) / DashboardPeriods.length;
    return (
        <ButtonGroup sx={{ height, width, borderColor: 'transparent' }}>
            {DashboardPeriods.map((str: DashboardPeriodType, i: number) => {
                const isActive = str === period;
                return (
                    <Button
                        key={str + i.toString()}
                        onClick={() => setPeriod(str)}
                        sx={getButtonStyle(uiParameters, isActive, buttonWidth)}>
                        {str}
                    </Button>)
            })}
        </ButtonGroup>
    )
}


const getButtonStyle = (params: IUiParametersContext, isActive: boolean, width: number): SxProps<Theme> => {
    const { Palette, FontSize } = params;
    const backgroundColor = isActive ? Palette.primary.darker : Palette.primary.light;
    const color = isActive ? Palette.background.component : Palette.text.secondary;
    const hoverBackgroundColor = isActive ? backgroundColor : Palette.primary.lighter;
    const hoverColor = isActive ? color : Palette.background.component;
    return { 
        width,
        textTransform: 'none', 
        backgroundColor, 
        borderColor: backgroundColor, 
        fontSize: FontSize.smaller, 
        color,
        '&:hover': {
            borderColor: "transparent",
            backgroundColor: hoverBackgroundColor,
            color: hoverColor
        }
    }
}

export default PeriodSwitchButtonGroup;