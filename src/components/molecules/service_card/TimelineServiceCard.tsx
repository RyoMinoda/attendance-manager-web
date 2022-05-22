import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type TimelineServiceCardProps = {
    width: number,
    height: number,
    titleHeight: number,
    marginTB: number,
    marginLR: number,
}

const TimelineServiceCard = ({ props }: { props: TimelineServiceCardProps }) => {
    const uiParameters = useContext(UiParametersContext);
    const { FontSize, Palette } = uiParameters;
    const { marginLR, marginTB, width, height, titleHeight } = props;
    return (
        <Box sx={{ marginLeft: marginLR, marginTop: marginTB, marginBottom: marginTB }}>
            <Grid container>
                <Grid item sx={{ width, height: titleHeight - 15 }}>
                    <Typography fontSize={FontSize.larger} fontWeight="bold">
                        Create Timeline
                    </Typography>
                </Grid>
                <Grid item sx={{ height: 15, width }}>
                    <Box bgcolor={Palette.primary.dark} sx={{ height: 5, width: 100, borderRadius: 5 }} />
                </Grid>
                <Grid item>
                    <Card variant="outlined" sx={{ width, height }}>
                        <CardContent>
                            <Box marginTop={2} marginLeft={2}>
                                <Typography fontSize={FontSize.large} fontWeight={100}>
                                    How To Make a Timeline
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TimelineServiceCard;