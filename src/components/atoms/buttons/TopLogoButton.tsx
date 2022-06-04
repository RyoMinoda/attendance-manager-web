import { Box, Button, Grid } from "@mui/material";
import TimelineIcon from '@mui/icons-material/Timeline';
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type TopLogoButtonProps = {
    width: number,
    height: number,
}


const TopLogoButton = ({ props }: { props: TopLogoButtonProps }) => {
    const { width, height } = props;
    const uiParameters = useContext(UiParametersContext);
    const outerMarginTB = height * 0.08 / 8;
    const outerMarginLR = width * 0.12 / 8;
    const innerHeight = height - 2 * outerMarginTB * 8;
    const innerWidth = width - 2 * outerMarginLR * 8;

    const { FontSize } = uiParameters;
    const iconSize = innerWidth / 2.5;
    const textWidth = innerWidth - iconSize;
    const textMarginTB = height * 0.2;
    const textHeight = height - 2 * textMarginTB;
    return (
        <Box marginTop={outerMarginTB} marginBottom={outerMarginTB} marginLeft={outerMarginLR}>
            <Button sx={{ textTransform: 'none', height: innerHeight, width: innerWidth, color: 'white' }}>
                <Grid item sx={{ width: iconSize }}  display="flex" justifyContent="flex-end">
                    <Box marginTop={2} marginRight={2}>
                        <TimelineIcon />
                    </Box>
                </Grid>
                <Grid item sx={{ width: textWidth }}>
                    <Grid container sx={{ width: textWidth, height: textHeight, marginTop: textMarginTB, marginBottom: textMarginTB, fontSize: FontSize.normal }}>
                        <Grid item display="flex" justifyContent="flex-start" alignItems="center" sx={{ width: textWidth,  height: textHeight / 2, textAlign: 'left' }}>
                            <Box>Attendance</Box>
                        </Grid>
                        <Grid item  display="flex" justifyContent="flex-start" alignItems="center" sx={{ width: textWidth,  height: textHeight / 2, textAlign: 'left', paddingLeft: '3px' }}>
                            Manager
                        </Grid>
                    </Grid>
                </Grid>
            </Button>
        </Box>
    );
}

export default TopLogoButton;