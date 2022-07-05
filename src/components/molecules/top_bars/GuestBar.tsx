import { Grid } from "@mui/material";
import { useContext } from "react";
import { GridColumnItem } from "../../../models/utils/GridItem";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import TopBarButton, { TopBarButtonProps } from "../../atoms/buttons/TopBarButton";
import TopLogoButton, { TopLogoButtonProps } from "../../atoms/buttons/TopLogoButton";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useWindowSize } from "../../../models/utils/WindowLayout";

const GuestBar = () => {
    const uiParameter = useContext(UiParametersContext);
    const WindowLayout = useWindowSize();
    const { Layout, Palette } = uiParameter;
    const totalColumn = 20;
    const topLogoXs = 3.2;
    const topLogoButtonProps: TopLogoButtonProps = {
        width: topLogoXs / totalColumn * WindowLayout.width,
        height: Layout.TopBarHeight
    }
    const textButtonXs = 1.5;
    const commonProps: TopBarButtonProps = {
        text: "",
        width: textButtonXs / totalColumn * WindowLayout.width,
        height: Layout.TopBarHeight - 2,
        icon: <></>,
        path: "",
    }
    const signInButtonProps: TopBarButtonProps = {
        ...commonProps, text: "SIGN IN", icon: <LoginIcon />
    }
    const signUpButtonProps: TopBarButtonProps = {
        ...commonProps, text: "SIGN UP", icon: <PersonAddAlt1Icon />
    }
    const gridItems: Array<GridColumnItem> = [
        { column: topLogoXs, totalColumn, children: <TopLogoButton props={topLogoButtonProps} /> },
        { column: totalColumn - topLogoXs - textButtonXs * 2, totalColumn, children: <></> },
        { column: textButtonXs, totalColumn, children: <TopBarButton props={signInButtonProps} /> },
        { column: textButtonXs, totalColumn, children: <TopBarButton props={signUpButtonProps} /> }
    ]
    return (
        <Grid container sx={{ height: Layout.TopBarHeight, background: Palette.primary.main, width: WindowLayout.width }}>
            {gridItems.map((x, i) => {
                const { column, totalColumn, children } = x;
                const width = WindowLayout.width / totalColumn * column;
                return (
                    <Grid item key={i} sx={{ height: Layout.TopBarHeight, width, }}>
                        {children}
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default GuestBar;