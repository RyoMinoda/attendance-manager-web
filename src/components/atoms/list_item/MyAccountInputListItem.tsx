import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type MyAccountInputListItemProps = {
    width: number,
    height: number,
    title: string,
    titleWidth: number,
    fontSize: number,
}


const MyAccountInputListItem = ({ props, children }: { props: MyAccountInputListItemProps, children: React.ReactNode }) => {
    const { width, height, title, titleWidth, fontSize } = props;
    const contentWidth = width - titleWidth;
    return (
        <Box width={width} height={height}>
            <Grid container width={width} height={height}>
                <Grid item height={height - 8} width={titleWidth} display="flex" alignItems="center" justifyContent="center">
                    <Typography fontSize={fontSize}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item height={height} width={contentWidth} display="flex" alignItems="center" justifyContent="flex-start">
                    {children}
                </Grid>
            </Grid>
        </Box>
    );
}

export default MyAccountInputListItem;