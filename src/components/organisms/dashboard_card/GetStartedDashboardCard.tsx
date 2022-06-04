import { Card, Grid, Typography } from "@mui/material";
import { GetStartedIconButtons, GetStartedIconButtonType } from "../../atoms/buttons/enums/GetStartedIconButtonType";
import GetStartedIconButton, { GetStartedIconButtonProps } from "../../atoms/buttons/GetStartedIconButton";
import { DashboardCardProps } from "./DashboardCardProps";

const GetStartedDashboardCard = ({ props }: { props: DashboardCardProps }) => {
    const { width, height, headerHeight, headerFontSize, gridMarginTB, innerContainerTopBottomMargin } = props;
    const containerHeight = height - 2 * gridMarginTB * 8;
    const contentHeight = height - headerHeight;
    const containerSidePadding = 3.0;
    const innerContainerWidth = width - 8 * containerSidePadding * 2;
    const innerContainerHeight = contentHeight - 2 * innerContainerTopBottomMargin * 8;
    const types = GetStartedIconButtons;
    const buttonWidth = innerContainerWidth / types.length;
    return (
        <Card sx={{ height, width }}>
            <Grid container sx={{ width, height: containerHeight, marginTop: gridMarginTB, marginBottom: gridMarginTB }}>
                <Grid item sx={{ width, height: headerHeight }} display="flex" alignItems="center" >
                    <Typography fontSize={headerFontSize} marginLeft={4}>
                        Get Started Guide
                    </Typography>
                </Grid>
                <Grid item sx={{ width, height: contentHeight }}>
                    <Grid container 
                        marginLeft={containerSidePadding} 
                        marginRight={containerSidePadding} 
                        marginBottom={innerContainerTopBottomMargin}
                        width={innerContainerWidth} 
                        height={innerContainerHeight}>
                        {types.map((x: GetStartedIconButtonType) => {
                            const buttonProps: GetStartedIconButtonProps = {
                                width: buttonWidth,
                                height: innerContainerHeight,
                                buttonType: x,
                            }
                            return (
                                <Grid item width={buttonWidth} height={innerContainerHeight} key={x}>
                                    <GetStartedIconButton props={buttonProps} />
                                </Grid>
                            )
                        })} 
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}

export default GetStartedDashboardCard;