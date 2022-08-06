import { Button, SxProps, Theme } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { getButtonHoverAndActiveStyle2, getButtonHoverAndActiveStyle4, getButtonHoverAndActiveStyleByIndex } from "../../../styles/buttonStyles";

export type DefaultButtonProps = {
    width: number,
    height: number,
    text: string,
    activeColor: string,
    isActive: boolean,
    fontSize?: number,
    hoverIndex?: number,
    handler?: () => void,
}

const DefaultButton = ({ props }: { props: DefaultButtonProps }) => {
    const { width, height, text, activeColor, isActive, handler, hoverIndex, fontSize } = props;
    const { Palette, FontSize } = useContext(UiParametersContext);
    const bgcolor = isActive ? activeColor : Palette.shadow.light;
    const targetHoverIndex = hoverIndex === undefined ? 4 : hoverIndex;
    const sxProps: SxProps<Theme> = {
        width, height,
        color: Palette.background.component,
        backgroundColor: bgcolor,
        textTransform: "none",
        fontSize: fontSize === undefined ? FontSize.normal : fontSize,
        fontWeight: 600,
        ...getButtonHoverAndActiveStyleByIndex(Palette, targetHoverIndex)
    }
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (handler != undefined) {
            handler();
        }
    }
    const onMouseDownHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
    }
    return (
        <Button sx={sxProps} disabled={!isActive} onClick={onClickHandler} onMouseDown={onMouseDownHandler}>
            {text}
        </Button>
    );
}

export default DefaultButton;