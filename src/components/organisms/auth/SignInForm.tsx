import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import DefaultButton, { DefaultButtonProps } from "../../atoms/buttons/DefaultButton";
import SignInFormInput, { SignInFormInputProps } from "../../molecules/auth/SignInFormInput";

export type SignInFormProps = {
    width: number,
    height: number,
}

const SignInForm = ({ props }: { props: SignInFormProps }) => {
    const { width, height } = props;
    const { Layout, FontSize, Palette } = useContext(UiParametersContext);
    const [ id, setId ] = useState("");
    const [ password, setPassword ] = useState("");
    const marginTopBottom = height * 0.12 / 8;
    const innerHeight = height - 2 * marginTopBottom * 8;
    const typoHeight = innerHeight * 0.3;
    const inputHeight = innerHeight * 0.40;
    const buttonAreaHeight = innerHeight - typoHeight - inputHeight;
    const inputProps: SignInFormInputProps = {
        width,
        height: inputHeight,
        id, setId, password, setPassword
    }
    const buttonAreaMargin = width * 0.2 / 8;
    const buttonInnerWidth = width - buttonAreaMargin * 2 * 8;
    const buttonHalfWidth = buttonInnerWidth / 2;
    const buttonHalfAreaStyle: SxProps<Theme> = {
        width: buttonHalfWidth,
        height: buttonAreaHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const submitButtonProps: DefaultButtonProps = {
        width: buttonHalfWidth * 0.8,
        height: buttonAreaHeight * 0.4,
        text: "Submit",
        activeColor: Palette.primary.darker,
        isActive: true,
        hoverIndex: 2,
        fontSize: FontSize.larger
    }
    const cancelButtonProps: DefaultButtonProps = {
        ...submitButtonProps,
        text: "Forgot Password",
        activeColor: Palette.text.secondary,
        hoverIndex: 1
    }
    return (
        <Box height={innerHeight} marginTop={marginTopBottom}>
            <Grid container sx={{ width, height: innerHeight }}>
                <Grid item sx={{ width, height: typoHeight, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography fontSize={FontSize.max} fontWeight="bolder">
                        Sign in
                    </Typography>
                </Grid>
                <Grid item sx={{ width, height: inputHeight }}>
                    <SignInFormInput props={inputProps} />
                </Grid>
                <Grid item sx={{ width, height: buttonAreaHeight }}>
                    <Grid container sx={{ width: buttonInnerWidth, height: buttonAreaHeight, marginLeft: buttonAreaMargin }}>
                        <Grid item sx={buttonHalfAreaStyle}>
                            <DefaultButton props={submitButtonProps} />
                        </Grid>
                        <Grid item sx={buttonHalfAreaStyle}>
                            <DefaultButton props={cancelButtonProps} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignInForm;