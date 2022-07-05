import { Button, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { getButtonHoverAndActiveStyle2 } from "../../../styles/buttonStyles";
import GroupsIcon from '@mui/icons-material/Groups';


export type DetailViewButtonProps = {
    isActive: boolean,
    width: number,
    height: number,
    path: string,
    id: string,
}

const DetailViewButton = ({ props }: { props: DetailViewButtonProps }) => {
    const { path, width, height, id, isActive } = props;
    const { Palette, FontSize } = useContext(UiParametersContext);
    const color = isActive ? Palette.primary.dark : Palette.text.secondary;
    const buttonStyle: SxProps<Theme> = {
        width, height,
        padding: 0,
        magin: 0,
        background: Palette.background.component,
        overflow: "hidden",
        textTransform: "none",
        boxShadow: "none",
        ...getButtonHoverAndActiveStyle2(Palette)
    }
    const iconWidth = width * 0.35;
    const textWidth = width - iconWidth - 10;
    const iconPadding = 0.8;
    const minerSize = iconWidth > height ? height : iconWidth;
    const iconSize = minerSize - 2 * iconPadding * 8;
    const iconStyle: SxProps<Theme> = {
        width: iconSize,
        height: iconSize,
        color,
    }
    const pathname = path.replace(":groupId", id);
    return (
        <Button sx={buttonStyle} variant='contained' disabled={!isActive}>
            <Link to={{pathname: "/" + pathname}} style={{ textDecoration: "none" }}>
                <Grid container width={width} height={height}>
                    <Grid item width={iconWidth} height={height} display="flex" justifyContent="center" alignItems="center">
                        <GroupsIcon sx={iconStyle} />
                    </Grid>
                    <Grid item width={textWidth} height={height} display="flex" justifyContent="flex-start" alignItems="center">
                        <Typography fontSize={FontSize.normal} fontWeight={600} color={color}>
                            Members
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
        </Button>
    );
}

export default DetailViewButton;