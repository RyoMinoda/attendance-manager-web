import { Grid, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import AuthIdInput, { AuthIdInputProps } from "../../atoms/inputs/AuthIdInput";
import AuthPasswordInput, { AuthPasswordInputProps } from "../../atoms/inputs/AuthPasswordInput";

export type SignInFormInputProps = {
    width: number,
    height: number,
    id: string,
    password: string,
    setId: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}

const SignInFormInput = ({ props }: { props: SignInFormInputProps }) => {
    const { width, height, id, setId, password, setPassword } = props;
    const { FontSize } = useContext(UiParametersContext);
    const fontSize = FontSize.larger;
    const marginLR = width * 0.15 / 8;
    const innerWidth = width - 2 * marginLR * 8;
    const halfHeight = height / 2;
    const textWidth = innerWidth * 0.2;
    const inputWidth = innerWidth - textWidth;
    const inputPaddingLR = innerWidth * 0.15 / 8;
    const inputPaddingTB = halfHeight * 0.08 / 8;
    const inputHeight = halfHeight - 2 * inputPaddingTB * 8;
    const inputOuterStyle: SxProps<Theme> = {
        width: inputWidth, 
        height: inputHeight, 
        paddingLeft: inputPaddingLR, 
        paddingTop: inputPaddingTB
    }
    const idInputProps: AuthIdInputProps = {
        width: innerWidth - 2 * inputPaddingLR * 8,
        height: inputHeight,
        id, setId, fontSize, 
    }
    const passwordProps: AuthPasswordInputProps = {
        password, setPassword,
        ...idInputProps
    }
    return (
        <Grid container sx={{ width: innerWidth, height, marginLeft: marginLR }}>
            <Grid item>
                <Grid container sx={{  width: innerWidth, height: halfHeight }}>
                    <Grid item sx={{ width: textWidth, height: halfHeight }} display="flex" justifyContent="end" alignItems="center">
                        <Typography fontSize={FontSize.large}>
                            ID
                        </Typography>
                    </Grid>
                    <Grid item sx={inputOuterStyle} display="flex" justifyContent="center" alignItems="center">
                        <AuthIdInput props={idInputProps} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container sx={{  width: innerWidth, height: halfHeight }}>
                    <Grid item sx={{ width: textWidth, height: halfHeight }} display="flex" justifyContent="end" alignItems="center">
                        <Typography fontSize={FontSize.large}>
                            Password
                        </Typography>
                    </Grid>
                    <Grid item sx={inputOuterStyle} display="flex" justifyContent="center" alignItems="center">
                        <AuthPasswordInput props={passwordProps} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SignInFormInput;