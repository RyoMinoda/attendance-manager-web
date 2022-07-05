import { Grid } from "@mui/material";
import { useContext } from "react";
import { GridColumnItem } from "../../../models/utils/GridItem";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { useWindowSize } from "../../../models/utils/WindowLayout";
import TopLogoButton, { TopLogoButtonProps } from "../../atoms/buttons/TopLogoButton";
import TopBarButton, { TopBarButtonProps } from "../../atoms/buttons/TopBarButton";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Path } from "../../../models/utils/PathType";

const MemberBar = () => {
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
        path: Path.DashboardTop,
    }
    const myAccountButtonProps: TopBarButtonProps = {
        ...commonProps, text: "MY ACCOUNT", icon: <PersonIcon />, path: Path.MyAccount,
    }
    const signUpButtonProps: TopBarButtonProps = {
        ...commonProps, text: "SIGN OUT", icon: <LogoutIcon />, path: Path.SignOut,
    }
    const gridItems: Array<GridColumnItem> = [
        { column: topLogoXs, totalColumn, children: <TopLogoButton props={topLogoButtonProps} /> },
        { column: totalColumn - topLogoXs - textButtonXs * 2 - 0.2, totalColumn, children: <></> },
        { column: textButtonXs, totalColumn, children: <TopBarButton props={myAccountButtonProps} /> },
        { column: textButtonXs, totalColumn, children: <TopBarButton props={signUpButtonProps} /> }
    ]
    return (
        <Grid container sx={{ height: Layout.TopBarHeight, background: Palette.primary.main, width: WindowLayout.width, overflow: "hidden" }}>
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

export default MemberBar;