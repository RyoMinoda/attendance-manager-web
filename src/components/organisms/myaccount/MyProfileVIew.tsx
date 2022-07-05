import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { UserDetail } from "../../../models/states/UserDetail";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import MyAccountProfileForm, { MyAccountProfileFormProps } from "../../molecules/my_accounts/MyAccountProfileForm";

export type MyProfileViewProps = {
    height: number,
    width: number,
    titleHeight: number,
    titleMarginLeft: number,
    userDetail: UserDetail
}

const MyProfileView = ({ props }: { props: MyProfileViewProps }) => {
    const { width, height, titleHeight, titleMarginLeft, userDetail } = props;
    const { FontSize, Palette } = useContext(UiParametersContext);
    const contentBottomMargin = 3;
    const contentHeight = height - titleHeight - contentBottomMargin * 8;
    const contentSide = 1;
    const contentWidth = width - 2 * contentSide * 8;
    const imageWidth = contentWidth * 0.25;
    const profileWidth = contentWidth - imageWidth;
    const profileFormProps: MyAccountProfileFormProps = {
        width: profileWidth,
        height: contentHeight,
        userDetail
    }
    return (
        <Box width={width} height={height}>
            <Grid container>
                <Grid item height={titleHeight} width={width} display="flex" justifyContent="flex-start" alignItems="center">
                    <Typography fontSize={FontSize.larger} marginLeft={titleMarginLeft} color={Palette.text.primary}>
                        My Profile
                    </Typography>
                </Grid>
                <Grid item height={contentHeight} width={width}>
                    <Grid container marginLeft={contentSide}>
                        <Grid item width={imageWidth} height={contentHeight}>

                        </Grid>
                        <Grid item width={profileWidth} height={contentHeight} sx={{ background: Palette.background.component, borderRadius: 1 }}>
                            <MyAccountProfileForm props={profileFormProps} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MyProfileView;