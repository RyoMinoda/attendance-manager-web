import { Box, Button, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { Member } from "../../../models/states/Member";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Group } from "../../../models/states/Group";
import CircleIcon from '@mui/icons-material/Circle';
import { getButtonHoverAndActiveStyle } from "../../../styles/buttonStyles";

export type DashboardMemberCardProps = {
    width: number,
    height: number,
    member: Member,
    groups: Array<Group>
}

const DashboardMemberCard = ({ props }: { props: DashboardMemberCardProps }) => {
    const { width, height, member, groups } = props;
    
    const { Palette, FontSize } = useContext(UiParametersContext);

    const marginBottom = 1;
    const marginLeft = 0.6;
    const boxHeight = height - marginBottom * 8;
    const boxWidth = width - marginLeft * 8;

    const innerBoxTopBottomMargin = 1.2;
    const innerBoxHeight = boxHeight - 2 * innerBoxTopBottomMargin * 8;

    const iconTopBottomMargin = 0.6;
    const iconMarginLR = 0.8;
    const iconSize = boxHeight - 2 * iconTopBottomMargin * 8;
    const iconColor = groups.length > 0 ? groups[0].Color : Palette.text.light;

    const iconBoxWidth = boxWidth * 0.2;

    const onlineColor = member.Online ? Palette.primary.dark : Palette.text.secondary;
    const iconHeight = innerBoxHeight * 0.8;
    const buttonStyle: SxProps<Theme> = {
        width, 
        height, 
        textTransform: 'none',
        color: Palette.text.primary,
        ...getButtonHoverAndActiveStyle(Palette)
    }
    const iconProps: SxProps<Theme> = {
        height: iconHeight,
        width: innerBoxHeight,
        color: onlineColor,
        marginTop: 0, paddingTop: 0
    };
    const nameWidth = boxWidth - boxHeight - iconBoxWidth - iconMarginLR * 8 * 2;
    return (
        <Button sx={buttonStyle}>
            <Box sx={{ width, height: boxHeight, borderRadius: 1, borderBottomStyle: 'solid', borderBottomColor: Palette.shadow.light, borderWidth: 2 }}>
                <Grid container sx={{ width: boxWidth, height: boxHeight, marginLeft }}>
                    <Grid item sx={{ width: boxHeight, height: boxHeight, marginLeft: iconMarginLR }}>
                        <AccountCircleIcon sx={{ color: iconColor, width: iconSize, height: iconSize, marginTop: iconTopBottomMargin }} />
                    </Grid>
                    <Grid item sx={{ height: boxHeight, width: nameWidth, marginTop: innerBoxTopBottomMargin, paddingLeft: 1, textAlign: 'left' }}>
                        <Box>
                            <Typography sx={{ fontSize: FontSize.larger }}>
                                {member.Name}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={{ height: boxHeight, width: iconBoxWidth }}>
                        <Grid container sx={{ width: iconBoxWidth, height: innerBoxHeight, marginTop: innerBoxTopBottomMargin }}>
                            <Grid item display="flex" alignItems="center" sx={{ height: innerBoxHeight, paddingRight: 0.8, }}>
                                <CircleIcon sx={iconProps} />
                            </Grid>
                            <Grid item display="flex" alignItems="center" sx={{ height: innerBoxHeight }}>
                                <Typography sx={{ fontSize: FontSize.smaller, color: onlineColor }}>
                                    {member.Online ? "active" : "inactive"}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Button>
    );
}

export default DashboardMemberCard;

