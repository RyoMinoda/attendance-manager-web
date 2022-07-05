import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Invitation } from "../../../models/states/Invitation";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type MyInvitationsProps = {
    width: number,
    titleHeight: number,
    itemHeight: number,
    marginTopBottom: number,
    titleMarginLeft: number,
    invitations: Array<Invitation>
}

const MyInvitations = ({ props }: { props: MyInvitationsProps }) => {
    const { width, itemHeight, invitations, marginTopBottom, titleMarginLeft } = props;
    const { FontSize } = useContext(UiParametersContext);
    const entireHeight = itemHeight * invitations.length;
    return (
        <Grid container height={entireHeight} width={width} marginTop={marginTopBottom} marginBottom={marginTopBottom}>
            <Grid item width={width}  display="flex" justifyContent="flex-start" alignItems="center">
                <Typography fontSize={FontSize.larger} marginLeft={titleMarginLeft}>
                    Invitations
                </Typography>
            </Grid>
            {invitations.map((invitation) => {
                return (
                    <Grid item>
                        <Box bgcolor="blue" height={itemHeight} width={width}>

                        </Box>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default MyInvitations;