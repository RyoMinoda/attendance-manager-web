import { Palette } from "./Palette";

export type PaletteSelection = {
    color: string,
    name: string,
    isDarkColor: boolean
}

export const paletteSelections: Array<PaletteSelection> = [
    { name: "Brown", color: "#9A6324", isDarkColor: true },
    { name: "Olive", color: "#808000", isDarkColor: true },
    { name: "Teal", color: "#469990", isDarkColor: true, },
    { name: "Navy", color: "#000075", isDarkColor: true },
    { name: "Red", color: "#e6194B", isDarkColor: true },
    { name: "Orange", color: "#f58231", isDarkColor: true },
    { name: "Yellow", color: "#ffe119", isDarkColor: false },
    { name: "Lime", color: "#bfef45", isDarkColor: false },
    { name: "Green", color: "#3cb44b", isDarkColor: true },
    { name: "Cyan", color: "#42d4f4", isDarkColor: false },
    { name: "Blue", color: "#4363d8", isDarkColor: true },
    { name: "Purple", color: "#911eb4", isDarkColor: true },
    { name: "Magenta", color: "#f032e6", isDarkColor: true },
    { name: "Grey", color: "#a9a9a9", isDarkColor: true },
    { name: "Pink", color: "#fabed4", isDarkColor: false },
    { name: "Apricot", color: "#ffd8b1", isDarkColor: false },
    { name: "Beige", color: "#fffac8", isDarkColor: false },
    { name: "Mint", color: "#aaffc3", isDarkColor: false },
    { name: "Lavender", color: "#dcbeff", isDarkColor: false },
    { name: "White", color: "#ffffff", isDarkColor: false },
];

export const getSelectionColor = (name: string): string => {
    const target = paletteSelections.filter(x => x.color === name);
    if (target.length > 0) return target[0].color;
    return "#ffffff";
}

export const getTextColorBySelectionColor = (color: string, Palette: Palette): string => {
    const target = paletteSelections.filter(x => x.color === color);
    if (target.length > 0) {
        if (target[0].isDarkColor) {
            return Palette.background.component;
        }
    }
    return Palette.text.primary;
}