import { Box, Card, Grid, Typography } from "@mui/material";
import { DashboardCardProps } from "./DashboardCardProps";

const MembersDashboardCard = ({ props }: { props: DashboardCardProps }) => {
    const { width, height, headerHeight, headerFontSize, gridMarginTB, innerContainerTopBottomMargin } = props;
    const containerHeight = height - 2 * gridMarginTB * 8;
    const contentHeight = containerHeight - headerHeight;
    const innerContainerHeight = contentHeight - 2 * innerContainerTopBottomMargin * 8;
    return (
        <Card sx={{ width, height }}>
            <Grid container sx={{ width, height: containerHeight, marginTop: gridMarginTB, marginBottom: gridMarginTB }}>
                <Grid item sx={{ height: headerHeight }}  display="flex" alignItems="center">
                    <Typography fontSize={headerFontSize} marginLeft={4}>
                        Members
                    </Typography>
                </Grid>
                <Grid item sx={{ height: contentHeight, width }}>
                    <Box width={width} 
                        height={innerContainerHeight}
                        marginTop={innerContainerTopBottomMargin}>
                            <Box height={innerContainerHeight} width={width} bgcolor="red" />
                        
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}

export default MembersDashboardCard;