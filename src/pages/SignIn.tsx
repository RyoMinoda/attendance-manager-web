import { Box, Card } from "@mui/material";
import { useContext } from "react";
import SignInForm, { SignInFormProps } from "../components/organisms/auth/SignInForm";
import GuestLayout, { GuestLayoutProps } from "../components/templates/GuestLayout";
import { UiParametersContext } from "../models/utils/UiParametersContext";
import { useWindowSize } from "../models/utils/WindowLayout";

const SignIn = () => {
    const { width, height } = useWindowSize();
    const { Layout } = useContext(UiParametersContext);
    const layoutProps: GuestLayoutProps = {
        height: 1200
    }
    const mainWidth = Layout.MiniAreaWidth;
    const outerMarginLR = (width - mainWidth) / 8 / 2;
    const marginTop = 10;
    const cardHeight = 450;
    const formProps: SignInFormProps = {
        width: mainWidth,
        height: cardHeight
    }
    return (
        <GuestLayout props={layoutProps}>
            <Box sx={{ marginLeft: outerMarginLR, marginRight: outerMarginLR, marginTop }}>
                <Card sx={{ width: mainWidth, height: cardHeight }}>
                    <SignInForm props={formProps} />
                </Card>
            </Box>
        </GuestLayout>
    );
}

export default SignIn;