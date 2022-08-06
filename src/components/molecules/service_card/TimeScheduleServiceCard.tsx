import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type TimeScheduleServiceCardProps = {
    width: number,
    height: number,
    titleHeight: number,
    marginTB: number,
    marginLR: number,
}

const TimeScheduleServiceCard = ({ props }: { props: TimeScheduleServiceCardProps }) => {
    const uiParameters = useContext(UiParametersContext);
    const { FontSize, Palette } = uiParameters;
    const { marginLR, marginTB, width, height, titleHeight } = props;
    return (
        <Box height={titleHeight + height} sx={{ marginLeft: marginLR, marginTop: marginTB, marginBottom: marginTB }}>
            <Grid container>
                <Grid item sx={{ width, height: titleHeight - 15 }}>
                    <Typography fontSize={FontSize.large} fontWeight="bold">
                        Create Time Schedule
                    </Typography>
                </Grid>
                <Grid item sx={{ height: 15, width }}>
                    <Box bgcolor={Palette.primary.dark} sx={{ height: 5, width: 100, borderRadius: 5 }} />
                </Grid>
                <Grid item height={height}>
                    <Card variant="outlined" sx={{ width, height }}>
                        <CardContent>
                            <Box marginTop={2} marginLeft={2}>
                                <Typography fontSize={FontSize.large} fontWeight={100}>
                                    How To Make a Time Schedule
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TimeScheduleServiceCard;