import { Box, Button, Grid } from "@mui/material";
import TimelineIcon from '@mui/icons-material/Timeline';
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { getButtonHoverAndActiveStyle, getButtonHoverAndActiveStyle2, getButtonHoverAndActiveStyle3, getButtonHoverAndActiveStyle5 } from "../../../styles/buttonStyles";

export type TopLogoButtonProps = {
    width: number,
    height: number,
}

const TopLogoButton = ({ props }: { props: TopLogoButtonProps }) => {
    const { width, height } = props;
    const { FontSize, Palette } = useContext(UiParametersContext);
    const outerMarginTB = height * 0.08 / 8;
    const outerMarginLR = width * 0.15 / 8;
    const innerHeight = height - 2 * outerMarginTB * 8;
    const innerWidth = width - 2 * outerMarginLR * 8;
    const standardWidth = 200;
    const iconTBMargin = 1.5;
    const iconWidth =   standardWidth < width ?  innerWidth / 3.5 : innerWidth;
    const iconHeight = innerHeight - iconTBMargin * 2 * 8;
    const textWidth = innerWidth - iconWidth;
    const textMarginTB = height * 0.2;
    const textHeight = height - 2 * textMarginTB;
    const style = getButtonHoverAndActiveStyle5(Palette);
    return (
        <Box width={width} height={height}>
            <Button sx={{ 
                textTransform: 'none', height: innerHeight, width: innerWidth, 
                marginTop: outerMarginTB, marginLeft: outerMarginLR, padding: 0, 
                ...style
            }}>
                <Grid container sx={{ width: innerWidth, height: innerHeight }}>
                    <Grid item sx={{ width: iconWidth, height: innerHeight }} display="flex" justifyContent="center" alignItems="center">
                        <TimelineIcon sx={{ height: iconHeight, width: iconWidth, color: Palette.background.component }} />
                    </Grid>
                    {standardWidth < width ? (
                        <Grid item sx={{ width: textWidth, height: innerHeight, textOverflow: "ellipsis" }} display="flex" alignItems="center" justifyContent="center" color={Palette.background.component}>
                            <Grid container sx={{ width: textWidth, height: textHeight, fontSize: FontSize.larger, fontWeight: "bold" }}>
                                <Grid item display="flex" justifyContent="flex-start" alignItems="center" sx={{ width: textWidth,  height: textHeight / 2, textAlign: 'left', paddingLeft: 1 }}>
                                    Attendance
                                </Grid>
                                <Grid item display="flex" justifyContent="flex-start" alignItems="center" sx={{ width: textWidth,  height: textHeight / 2, textAlign: 'left', paddingLeft: 3 }}>
                                    Manager
                                </Grid>
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid item></Grid>
                    )}
                    
                </Grid>
            </Button>
        </Box>
    );
}

export default TopLogoButton;