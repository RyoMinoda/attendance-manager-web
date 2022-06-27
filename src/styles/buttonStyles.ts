import { SxProps, Theme } from "@mui/material";
import { Palette } from "../models/utils/Palette";

export const getButtonHoverAndActiveStyle = (Palette: Palette): SxProps<Theme> => {
    return {
        '&:hover': {
            background: Palette.shadow.light,
            boxShadow: 'none',
        },
        '&:active': {
            background: Palette.shadow.light,
            boxShadow: 'none',
        }
    }
}

export const getButtonHoverAndActiveStyle2 = (Palette: Palette): SxProps<Theme> => {
    return {
        '&:hover': {
            background: Palette.primary.light,
            boxShadow: 'none',
        },
        '&:active': {
            background: Palette.primary.light,
            boxShadow: 'none',
        }
    }
}