import { Grid } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../models/utils/UiParametersContext";
import { useWindowSize } from "../../models/utils/WindowLayout";
import GuestBar from "../molecules/bars/GuestBar";


const GuestLayout = ({ children }: { children: React.ReactNode }) => {
    const uiParameter = useContext(UiParametersContext);
    const { Layout, Palette } = uiParameter;
    const WindowLayout = useWindowSize();
    const mainHeight = WindowLayout.height - Layout.TopBarHeight;
    return (
        <Grid container width={WindowLayout.width} height={WindowLayout.height} sx={{ overflow: 'hidden' }}>
            <Grid item width={WindowLayout.width} height={Layout.TopBarHeight}  sx={{ overflow: 'hidden' }}>
                <GuestBar />
            </Grid>
            <Grid item width={WindowLayout.width} height={mainHeight} sx={{ background: Palette.background.main, overflow: 'hidden' }}>
                {children}
            </Grid>
        </Grid>
    );
}

export default GuestLayout;