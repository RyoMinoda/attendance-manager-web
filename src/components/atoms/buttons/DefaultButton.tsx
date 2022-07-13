import { Button, SxProps, Theme } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { getButtonHoverAndActiveStyle4 } from "../../../styles/buttonStyles";

export type DefaultButtonProps = {
    width: number,
    height: number,
    text: string,
    activeColor: string,
    isActive: boolean,
}

const DefaultButton = ({ props }: { props: DefaultButtonProps }) => {
    const { width, height, text, activeColor, isActive } = props;
    const { Palette, FontSize } = useContext(UiParametersContext);
    const bgcolor = isActive ? activeColor : Palette.shadow.light;
    const sxProps: SxProps<Theme> = {
        width, height,
        color: Palette.background.component,
        backgroundColor: bgcolor,
        textTransform: "none",
        fontSize: FontSize.normal,
        fontWeight: 600,
        ...getButtonHoverAndActiveStyle4(Palette)
    }
    return (
        <Button sx={sxProps} disabled={!isActive}>
            {text}
        </Button>
    );
}

export default DefaultButton;