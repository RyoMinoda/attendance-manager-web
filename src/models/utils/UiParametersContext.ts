
import { createContext } from "react";
import { defaultFontSize, FontSize } from "./FontSize";
import { defaultLayout, Layout } from "./Layout";
import { defaultPalette, Palette } from "./Palette";

export interface IUiParametersContext {
    Palette: Palette,
    FontSize: FontSize,
    Layout: Layout
}

export const defaultUiParameters: IUiParametersContext = {
    Palette: defaultPalette,
    FontSize: defaultFontSize,
    Layout: defaultLayout
}

export const UiParametersContext = createContext<IUiParametersContext>(defaultUiParameters);