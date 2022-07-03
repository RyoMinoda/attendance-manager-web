import { Button, Grid, Icon, SxProps, Theme, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { getButtonHoverAndActiveStyle3 } from "../../../styles/buttonStyles";

export type NewItemCreationButtonProps = {
    width: number,
    height: number
}

const NewItemCreationButton = ({ props }: { props: NewItemCreationButtonProps }) => {
    const { width, height } = props;
    const { Palette, FontSize } = useContext(UiParametersContext);

    const buttonStyle: SxProps<Theme> = {
        width, 
        height,
        padding: 0,
        background: Palette.primary.main,
        overflow: 'hidden',
        textTransform: "none",
        minWidth: 0,
        minHeight: 0,
        ...getButtonHoverAndActiveStyle3(Palette)
    }
    const sideMargin = 1;
    const innerWidth = width - sideMargin * 8 * 2;
    const iconWidth = innerWidth * 0.4;
    const textWidth = innerWidth - iconWidth;
    const innerHeight = height;
    return (
        <Button sx={buttonStyle} variant="contained">
            <Grid container>
                <Grid item width={iconWidth} height={innerHeight} sx={{ paddingLeft: sideMargin }}  display="flex" alignItems="center" justifyContent="center">
                    <AddIcon sx={{ minWidth: 0, minHeight: 0, height: innerHeight / 1.5 }} />
                </Grid>
                <Grid item width={textWidth} height={innerHeight} display="flex" alignItems="center" justifyContent="center">
                    <Typography fontSize={FontSize.normal}>
                        New
                    </Typography>
                </Grid>
            </Grid>
        </Button>
    );
}

export default NewItemCreationButton;