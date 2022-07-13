import { Card, Grid, Typography } from "@mui/material";
import { DashboardCardProps } from "./DashboardCardProps";

const NotificationDashboardCard = ({ props }: { props: DashboardCardProps }) => {
    const { width, height, headerHeight, headerFontSize, 
        gridMarginTB, innerContainerTopBottomMargin, innerContainerLeftRightMargin } = props;
    const containerHeight = height - 2 * gridMarginTB * 8;
    const contentHeight = height - headerHeight;
    const innerContainerWidth = width - 8 * innerContainerLeftRightMargin * 2;

    return (
        <Card sx={{ width, height }}>
            <Grid container sx={{ width, height: containerHeight, marginTop: gridMarginTB, marginBottom: gridMarginTB }}>
                <Grid item sx={{ width, height: headerHeight }} display="flex" alignItems="center" >
                    <Typography fontSize={headerFontSize} marginLeft={4}>
                        Coming Soon
                    </Typography>
                </Grid>
                <Grid item sx={{ width, height: contentHeight }}  marginTop={innerContainerTopBottomMargin}>

                </Grid>
            </Grid>
        </Card>
    );
}

export default NotificationDashboardCard;