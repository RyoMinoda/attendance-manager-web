import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { Invitation } from "../../../models/states/Invitation";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import DefaultButton, { DefaultButtonProps } from "../../atoms/buttons/DefaultButton";
import IconSwitchButton, { IconSwitchButtonProps } from "../../atoms/buttons/IconSwitchButton";

export type MyInvitationListItemProps = {
    width: number,
    height: number,
    space: number,
    invitation: Invitation
}

const MyInvitationListItem = ({ props }: { props: MyInvitationListItemProps }) => {
    const { width, height, space, invitation } = props;
    const { Palette, Layout, FontSize } = useContext(UiParametersContext);
    const marginSide = 5;
    const marginTopBottom = space / 2 / 8;
    const containerHeight = height - space;
    const innerWidth = width - 2 * marginSide * 8;
    const innerMarginTopBottom = (containerHeight * 0.1) / 8;
    const innerHeight = containerHeight - 2 * innerMarginTopBottom * 8;
    const buttonHeight = innerHeight / 2;
    const textMarginTopBottom = 1;
    const textHeight = innerHeight - 2 * textMarginTopBottom * 8;
    const grounNameHeight = textHeight * 0.6;
    const invitedByHeight = textHeight - grounNameHeight;
    const textAreaWidth = innerWidth * 0.75;
    const buttonAreaWidth = (innerWidth - textAreaWidth);
    const commonSx: SxProps<Theme> = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const buttonSpace = 20;
    const joinProps: DefaultButtonProps = {
        width: buttonAreaWidth - buttonSpace * 2,
        height: Layout.DefaultButtonHeight,
        activeColor: Palette.primary.main,
        isActive: invitation.IsAccepted,
        text: "Join"
    }
    const leaveProps: DefaultButtonProps = {
        ...joinProps,
        isActive: !invitation.IsAccepted,
        activeColor: Palette.secondary.red,
        text: "Leave"
    }
    return (
        <Box 
            width={width} 
            height={containerHeight} 
            bgcolor={Palette.background.component} 
            marginTop={marginTopBottom}
            sx={{ borderRadius: 1, overflow: 'hidden' }}>
            <Box marginLeft={marginSide} marginTop={innerMarginTopBottom} width={innerWidth} height={innerHeight}>
                <Grid container height={innerHeight} width={innerWidth}>
                    <Grid item height={textHeight} width={textAreaWidth} marginTop={textMarginTopBottom}>
                        <Grid container>
                            <Grid item 
                                width={innerWidth}
                                height={grounNameHeight}
                                display="flex" justifyContent="flex-start" alignItems="center">
                                <Typography fontSize={FontSize.large} color={Palette.text.primary}>
                                    {invitation.GroupName}
                                </Typography>
                            </Grid>
                            <Grid item
                                width={innerWidth}
                                height={invitedByHeight}
                                display="flex" justifyContent="flex-start" alignItems="center">
                                <Typography fontSize={FontSize.normal} color={Palette.text.primary}>
                                    by {invitation.InvitedBy}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container height={innerHeight} width={buttonAreaWidth}>
                            <Grid item width={buttonAreaWidth} height={buttonHeight} sx={commonSx}>
                                <DefaultButton props={joinProps} />
                            </Grid>
                            <Grid item width={buttonAreaWidth} height={buttonHeight} sx={commonSx}>
                                <DefaultButton props={leaveProps} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default MyInvitationListItem;