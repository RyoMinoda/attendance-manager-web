export type Palette = {
    primary: {
        dark:   string;
        darker: string;
        main:   string;
        lighter: string;
        light:  string;
    },
    secondary: {
        red: string,
        blue: string,
        orange: string,
    },
    background: {
        main: string,
        component: string,
    },
    text: {
        primary: string,
        secondary: string,
        light: string
    },
    shadow: {
        light: string,
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
        red: "#ff6464",
        blue: "#5fc9f3",
        orange: "#fa9856",
    },
    background: {
        main: "#F0F5ED",
        component: "white",
    },
    text: {
        primary: "#222222",
        secondary: "#888888",
        light: '#CCCCCC',
    },
    shadow: {
        light: '#EEEEEE'
    }
}