import { Box, Button, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { GetStartedIconButtonType, IconButtonTextDictionary, IconColorDictionary, IconTypeDictionary } from "./enums/GetStartedIconButtonType";

export type GetStartedIconButtonProps = {
    width: number,
    height: number,
    buttonType: GetStartedIconButtonType
}

const GetStartedIconButton = ({ props }: { props: GetStartedIconButtonProps }) => {
    const { width, height, buttonType } = props;
    const { Palette, FontSize } = useContext(UiParametersContext);
    const marginTopBottom = 1.0;
    const getIcon = IconTypeDictionary.getValue(buttonType);
    const getColor = IconColorDictionary.getValue(buttonType);
    const text = IconButtonTextDictionary.getValue(buttonType);
    const marginLeft = 0.5;
    const marginRight = 2.0;
    const marginSide = marginRight + marginLeft;
    const innerHeight = height - 2 * 8 * marginTopBottom;
    const innerWidth = width - 2 * 8 * marginSide;
    const iconWidth = innerWidth * 0.3;
    const textWidth = innerWidth - iconWidth;
    const buttonMarginTopBottom = 0.25;
    const buttonHeight = innerHeight - buttonMarginTopBottom * 8 * 2;
    const titleHeight = buttonHeight * 0.38;
    const textHeight = buttonHeight - titleHeight;
    const iconMargin = 2.3;
    const iconMarginLeft = 1;
    const color = getColor(Palette);
    const iconStyle: SxProps<Theme> = {
        marginTop: iconMargin,
        marginLeft: iconMarginLeft,
        width: iconWidth - iconMarginLeft * 8,
        height: innerHeight - iconMargin * 8 * 2,
        color,
    }
    const buttonStyle: SxProps<Theme> = {
        width: textWidth,
        height: innerHeight,
        background: 'none',
        textTransform: 'none',
        border: 'none',
        boxShadow: 'none',
        textOverflow: 'hidden',
        '&:hover': {
            background: Palette.shadow.light,
            boxShadow: 'none',
        },
        '&:active': {
            background: Palette.shadow.light,
            boxShadow: 'none',
        }
    }
    const titleStyle: SxProps<Theme> = {
        height: titleHeight, 
        width: textWidth, 
        textAlign: 'left', 
        paddingLeft: 1,
        paddingBottom: 0.2,
        color,
        textIndent: 3.5,
    };
    const textStyle: SxProps<Theme> = {
        height: textHeight, 
        width: textWidth, 
        fontSize: FontSize.normal, 
        color: Palette.text.primary, 
        paddingLeft: 1.0,
        paddingTop: 0.3,
        textAlign: 'left',
        lineHeight: 1.2,
        textIndent: 3.5,
        textOverflow: 'hidden',
    }
    return (
        <Box 
            width={width} 
            height={innerHeight} 
            marginTop={marginTopBottom} 
            marginBottom={marginTopBottom}
            marginRight={marginRight}
            marginLeft={marginLeft}>
            <Grid container width={innerWidth} height={innerHeight}>
                <Grid item width={iconWidth} height={innerHeight}>
                    {getIcon(iconStyle)}
                </Grid>
                <Grid item width={textWidth} height={innerHeight}>
                    <Button variant='contained' sx={buttonStyle}>
                        <Grid container width={textWidth} height={buttonHeight} sx={{ marginTop: buttonMarginTopBottom, marginBottom: buttonMarginTopBottom }}>
                            <Grid item sx={titleStyle}>
                                <Typography sx={{ fontSize: FontSize.larger }}>
                                    {buttonType}
                                </Typography>
                            </Grid>
                            <Grid item sx={textStyle}>
                                {text}
                            </Grid>
                        </Grid>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GetStartedIconButton;
