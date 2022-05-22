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
    const { FontSize } = uiParameters;
    const iconSize = width / 2.5;
    const textWidth = width - iconSize;
    const textMarginTB = height * 0.2;
    const textHeight = height - 2 * textMarginTB;
    return (
        <Button sx={{ textTransform: 'none',  height, width, color: 'white' }}>
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
    );
}

export default TopLogoButton;