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


export const getButtonHoverAndActiveStyle3 = (Palette: Palette): SxProps<Theme> => {
    return {
        '&:hover': {
            background: Palette.primary.darker,
            color: Palette.primary.light
        },
        '&:active': {
            background: Palette.primary.light,
            color: Palette.primary.darker,
            boxShadow: 'none',
        }
    }
}

export const getButtonHoverAndActiveStyle4 = (Palette: Palette): SxProps<Theme> => {
    return {
        '&:hover': {
            background: Palette.text.secondary,
            color: Palette.primary.light
        },
        '&:active': {
            background: Palette.primary.light,
            color: Palette.text.secondary,
            boxShadow: 'none',
        }
    }
}


export const getButtonHoverAndActiveStyle5 = (Palette: Palette): SxProps<Theme> => {
    return {
        '&:hover': {
            background: Palette.primary.main,
            color: Palette.primary.light
        },
        '&:active': {
            background: Palette.primary.main,
            color: Palette.text.secondary,
            boxShadow: 'none',
        }
    }
}

export const getButtonHoverAndActiveStyleByIndex = (Palette: Palette, index: number): SxProps<Theme> => {
    switch (index) {
        case 1:
            return getButtonHoverAndActiveStyle(Palette);
        case 2:
            return getButtonHoverAndActiveStyle2(Palette);
        case 3:
            return getButtonHoverAndActiveStyle3(Palette);
        case 4:
            return getButtonHoverAndActiveStyle4(Palette);
        case 5:
            return getButtonHoverAndActiveStyle5(Palette);
        default:
            throw new Error("invalid hover style");
    }
}