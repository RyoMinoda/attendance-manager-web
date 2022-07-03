import { Box, Grid, SxProps, Theme } from "@mui/material";
import { useContext } from "react";
import { Group } from "../../../models/states/Group";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type GroupTopListItemProps = {
    width: number,
    height: number,
    group: Group
}

const GroupTopListItem = ({ props }: { props: GroupTopListItemProps }) => {
    const { width, height } = props;
    const itemHeight = height - 2;
    const { Palette } = useContext(UiParametersContext);
    const outerBoxStyle: SxProps<Theme> = {
        overflow: "hidden", 
        background: Palette.background.component, 
        borderColor: Palette.primary.main,
        borderBottom: "solid 1px",
        borderRadius: 1,
        boxShadow: "none"
    }
    return (
        <Box width={width} height={itemHeight} sx={outerBoxStyle}>
            <Grid container width={width} height={itemHeight}>
                
            </Grid>
        </Box>
    );
}

export default GroupTopListItem;