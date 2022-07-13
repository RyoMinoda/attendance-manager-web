import { Palette } from "./Palette";

export type PaletteSelection = {
    color: string,
    name: string,
    isDarkColor: boolean
}

export const Color = {
    Brown: "Brown",
    Olive: "Olive",
    Teal: "Teal",
    Navy: "Navy",
    Red: "Red",
    Orange: "Orange",
    Yellow: "Yellow",
    Lime: "Lime",
    Green: "Green",
    Cyan: "Cyan",
    Blue: "Blue",
    Purple: "Purple",
    Magenta: "Magenta",
    Grey: "Grey",
    Pink: "Pink",
    Apricot: "Apricot",
    Beige: "Beige",
    Mint: "Mint",
    Lavender: "Lavender",
    White: "White"
} as const;

export const paletteSelections: Array<PaletteSelection> = [
    { name: Color.Brown, color: "#9A6324", isDarkColor: true },
    { name: Color.Olive, color: "#808000", isDarkColor: true },
    { name: Color.Teal, color: "#469990", isDarkColor: true, },
    { name: Color.Navy, color: "#000075", isDarkColor: true },
    { name: Color.Red, color: "#e6194B", isDarkColor: true },
    { name: Color.Orange, color: "#f58231", isDarkColor: true },
    { name: Color.Yellow, color: "#ffe119", isDarkColor: false },
    { name: Color.Lime, color: "#bfef45", isDarkColor: false },
    { name: Color.Green, color: "#3cb44b", isDarkColor: true },
    { name: Color.Cyan, color: "#42d4f4", isDarkColor: false },
    { name: Color.Blue, color: "#4363d8", isDarkColor: true },
    { name: Color.Purple, color: "#911eb4", isDarkColor: true },
    { name: Color.Magenta, color: "#f032e6", isDarkColor: true },
    { name: Color.Grey, color: "#a9a9a9", isDarkColor: true },
    { name: Color.Pink, color: "#fabed4", isDarkColor: false },
    { name: Color.Apricot, color: "#ffd8b1", isDarkColor: false },
    { name: Color.Beige, color: "#fffac8", isDarkColor: false },
    { name: Color.Mint, color: "#aaffc3", isDarkColor: false },
    { name: Color.Lavender, color: "#dcbeff", isDarkColor: false },
    { name: Color.White, color: "#ffffff", isDarkColor: false },
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

export const getPaletteColor = (name: string): PaletteSelection => {
    const target = paletteSelections.filter(x => x.color === name);
    if (target.length > 0) return target[0];
    return paletteSelections[0];
}