import { Button, Grid, SvgIconTypeMap, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { getButtonHoverAndActiveStyle2, getButtonHoverAndActiveStyle3, getButtonHoverAndActiveStyle4 } from "../../../styles/buttonStyles";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IconSwitchButtonProps = {
    width: number,
    height: number,
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    },
    value: boolean,
    title: string,
    isActive: boolean,
    activeColor: string,
    onActiveHandler?: () => void,
    onInactiveHandler?: () => void,
}

const IconSwitchButton = ({ props }: { props: IconSwitchButtonProps }) => {
    const { width, height, value, isActive, Icon, onActiveHandler, onInactiveHandler, title, activeColor } = props;
    const { Palette, FontSize } = useContext(UiParametersContext);
    const color = isActive ? Palette.background.component : Palette.text.secondary;
    const buttonStyle: SxProps<Theme> = {
        width, height,
        padding: 0,
        magin: 0,
        background: activeColor,
        textTransform: "none",
        boxShadow: "none",
        ...getButtonHoverAndActiveStyle4(Palette)
    }
    const marginSide = width * 0.05 / 8;
    const innerWidth = width - 2 * marginSide * 8;
    const iconWidth = innerWidth * 0.4;
    const textWidth = innerWidth - iconWidth;
    const iconPadding = 0.8;
    const minerSize = iconWidth > height ? height : iconWidth;
    const iconSize = minerSize - 2 * iconPadding * 8;
    const iconStyle: SxProps<Theme> = {
        width: iconSize,
        height: iconSize,
        color,
    }
    const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (value) {
            if (onActiveHandler !== undefined) onActiveHandler();
        } else {
            if (onInactiveHandler !== undefined) onInactiveHandler();
        }
    }
    return (
        <Button sx={buttonStyle} variant='contained' disabled={!isActive} onClick={onClickHandler}>
            <Grid container marginLeft={marginSide} width={innerWidth} height={height} sx={{ textOverflow: "hidden" }}>
                <Grid item width={iconWidth} height={height} display="flex" justifyContent="center" alignItems="center">
                    <Icon sx={iconStyle} />
                </Grid>
                <Grid item width={textWidth} height={height} display="flex" justifyContent="flex-start" alignItems="center">
                    <Typography fontSize={FontSize.normal} fontWeight={600} color={color}>
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </Button>
    );
}

export default IconSwitchButton;