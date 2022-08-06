import { Badge, Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type TopBarButtonProps = {
    text: string,
    height: number,
    width: number,
    icon: React.ReactNode,
    alertCount: number,
    onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TopBarButton = ({ props }: { props: TopBarButtonProps }) => {
    const { FontSize, Palette } = useContext(UiParametersContext);
    const { height, width, text, icon, alertCount, onClickHandler } = props;
    const innerMarginTB = height * 0.1;
    const buttonHeight = height - 2 * innerMarginTB;
    const iconHeight = buttonHeight * 3.6 / 5;
    const iconTopPadding = iconHeight * 0.21 / 8;
    const textHeight = buttonHeight - iconHeight;
    const color = alertCount > 0 ? "warning" : "default";
    return (
        <Button sx={{ width, height: buttonHeight, color: 'white', marginTop: innerMarginTB / 8, overflow: 'hidden' }} onClick={onClickHandler}>
            <Grid container sx={{ width, height: buttonHeight }}>
                <Grid item sx={{ width, height: iconHeight, paddingTop: iconTopPadding }}>
                    <Badge color={color} variant="dot">
                        {icon}
                    </Badge>
                </Grid>
                <Grid item sx={{ width, height: textHeight }}>
                    <Typography sx={{ fontSize: FontSize.small, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {text}
                    </Typography>
                </Grid>
            </Grid>
        </Button>
    );
}

export default TopBarButton;