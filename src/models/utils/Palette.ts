export type Palette = {
    primary: {
        dark:   string;
        darker: string;
        main:   string;
        lighter: string;
        light:  string;
    },
    secondary: {

    },
    background: {
        main: string,
        component: string,
    }
}

export const defaultPalette: Palette = {
    primary: {
        dark:   "#46B510",
        darker: "#66C23A",
        main:   "#8AD765",
        lighter: "#B5E69E",
        light:  "#E1F0DA",
    },
    secondary: {

    },
    background: {
        main: "#F0F5ED",
        component: "white",
    },

}