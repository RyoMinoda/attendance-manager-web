import { Button, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import EditIcon from '@mui/icons-material/Edit';
import { getButtonHoverAndActiveStyle4 } from "../../../styles/buttonStyles";

export type EditButtonProps = {
    width: number,
    height: number,
    path: string,
    isActive: boolean,
}

const EditButton = ({ props }: { props: EditButtonProps }) => {
    const { width, height, path, isActive } = props;
    const { Palette, FontSize } = useContext(UiParametersContext);
    const color = isActive ? Palette.background.component : Palette.text.secondary;
    const buttonStyle: SxProps<Theme> = {
        width, height,
        padding: 0,
        magin: 0,
        background: Palette.primary.darker,
        textTransform: "none",
        boxShadow: "none",
        ...getButtonHoverAndActiveStyle4(Palette)
    }
    const iconWidth = width * 0.45;
    const textWidth = width - iconWidth;
    const iconPadding = 0.8;
    const minerSize = iconWidth > height ? height : iconWidth;
    const iconSize = minerSize - 2 * iconPadding * 8;
    const iconStyle: SxProps<Theme> = {
        width: iconSize,
        height: iconSize,
        color,
    }
    return (
        <Button sx={buttonStyle} variant='contained' disabled={!isActive}>
            <Link to={{ pathname: "/" + path }} style={{ textDecoration: "none" }}>
                <Grid container width={width} height={height}>
                    <Grid item width={iconWidth} height={height} display="flex" justifyContent="center" alignItems="center">
                        <EditIcon sx={iconStyle} />
                    </Grid>
                    <Grid item width={textWidth} height={height} display="flex" justifyContent="flex-start" alignItems="center">
                        <Typography fontSize={FontSize.normal} fontWeight={600} color={color}>
                            Edit
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
        </Button>
    );
}

export default EditButton;