import { Button, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { Group } from "../../../models/states/Group";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { getButtonHoverAndActiveStyle2 } from "../../../styles/buttonStyles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Path } from "../../../models/utils/PathType";
import { Link, RouterProps } from "react-router-dom";

export type SideGroupListItemProps = {
    group: Group,
    height: number,
    width: number,
}

const SideGroupListItem = ({ props }: { props: SideGroupListItemProps }) => {
    const { group, width, height } = props;
    const { Palette, FontSize } = useContext(UiParametersContext);
    const marginBottom = 0.5;
    const paddingSide = 2;
    const buttonStyle: SxProps<Theme> = {
        width, height: height - marginBottom * 8,
        minHeight: 0,
        minWidth: 0,
        padding: 0,
        paddingLeft: paddingSide,
        paddingRight: paddingSide,
        marginBottom,
        background: Palette.background.main,
        boxShadow: "none",
        textTransform: "none",
        overflow: "hidden",
        ...getButtonHoverAndActiveStyle2(Palette)
    }
    const innerWidth = width - 2 * 8 * paddingSide;
    const iconWidth = innerWidth * 0.25;
    const textWidth = innerWidth - iconWidth;
    const iconMargin = 1;
    const iconSize = height - 2 * 8 * iconMargin;
    const pathname = "/" + Path.GroupDetail.replace(":groupId", group.GroupId);
    return (
        <Button sx={buttonStyle} variant="contained">
            <Link to={{ pathname }} style={{ textDecoration: "none" }}>
                <Grid container>
                    <Grid item width={iconWidth} height={height}>
                        <AccountCircleIcon sx={{ 
                            color: group.Color, 
                            width: iconSize, 
                            height: iconSize, 
                            marginTop: iconMargin
                        }} />
                    </Grid>
                    <Grid item width={textWidth} height={height}
                        display="flex" alignItems="center" justifyContent="start">
                        <Typography fontSize={FontSize.normal} color={Palette.text.primary}>
                            {group.Name}
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
        </Button>
    );
}

export default SideGroupListItem;