import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Invitation } from "../../../models/states/Invitation";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import MyInvitationListItem, { MyInvitationListItemProps } from "../../molecules/my_accounts/MyInvitationListItem";

export type MyInvitationsProps = {
    width: number,
    titleHeight: number,
    itemHeight: number,
    marginTopBottom: number,
    titleMarginLeft: number,
    titleContentSpace: number,
    invitations: Array<Invitation>
}

const MyInvitations = ({ props }: { props: MyInvitationsProps }) => {
    const { width, itemHeight, invitations, marginTopBottom, titleMarginLeft, titleContentSpace, titleHeight } = props;
    const { FontSize, Palette } = useContext(UiParametersContext);
    const entireHeight = itemHeight * invitations.length + titleHeight;
    const marginSide = 10;
    const itemWidth = width - 2 * marginSide * 8;
    const itemTopBottomSpace = itemHeight * 0.15;
    return (
        <Grid container height={entireHeight} width={width} marginTop={marginTopBottom} marginBottom={marginTopBottom}>
            <Grid item width={width} height={titleHeight}  display="flex" justifyContent="flex-start" alignItems="center"
                sx={{ marginBottom: titleContentSpace, border: "none", borderBottom: 1, borderColor: Palette.text.secondary }}>
                <Typography fontSize={FontSize.larger} marginLeft={titleMarginLeft} color={Palette.text.primary}>
                    Groups
                </Typography>
            </Grid>
            <Grid item marginLeft={marginSide} width={itemWidth}>
                <Grid container width={itemWidth}>
                    {invitations.map((invitation, i) => {
                        const inivitationProps: MyInvitationListItemProps = {
                            width: itemWidth, 
                            height: itemHeight,
                            space: itemTopBottomSpace,
                            invitation,
                        }
                        return (
                            <Grid item key={"invitation" + i }>
                                <MyInvitationListItem props={inivitationProps} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MyInvitations;