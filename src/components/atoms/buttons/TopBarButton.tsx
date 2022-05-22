import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type TopBarButtonProps = {
    text: string,
    height: number,
    width: number,
    icon: React.ReactNode,
    link: string,
}

const TopBarButton = ({ props }: { props: TopBarButtonProps }) => {
    const uiParameter = useContext(UiParametersContext);
    const { FontSize } = uiParameter;
    const { height, width, text, icon } = props;
    const innerMarginTB = height * 0.12;
    const buttonHeight = height - 2 * innerMarginTB;
    const iconHeight = buttonHeight * 3 / 5;
    const textHeight = buttonHeight - iconHeight;
    return (
        <Box sx={{ width, height }}>
            <Button sx={{ width, height: buttonHeight, color: 'white', marginTop: innerMarginTB / 8 }}>
                <Grid container sx={{ width, height: buttonHeight }}>
                    <Grid item sx={{ width, height: iconHeight }}>
                        {icon}
                    </Grid>
                    <Grid item sx={{ width, height: textHeight }}>
                        <Typography sx={{ fontSize: FontSize.small }}>{text}</Typography>
                    </Grid>
                </Grid>
            </Button>
        </Box>

    );
}

export default TopBarButton;