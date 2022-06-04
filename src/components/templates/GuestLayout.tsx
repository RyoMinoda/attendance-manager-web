import { Grid } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../models/utils/UiParametersContext";
import { useWindowSize } from "../../models/utils/WindowLayout";
import GuestBar from "../molecules/bars/GuestBar";

export type GuestLayoutProps = {
    height: number,
}

const GuestLayout = ({ props, children }: { props: GuestLayoutProps, children: React.ReactNode }) => {
    const { height } = props;
    const { Layout, Palette } = useContext(UiParametersContext);
    const WindowLayout = useWindowSize();
    const theoricalHeight = height + Layout.TopBarHeight + Layout.PageMarginBottom * 8;
    const entireHeight = WindowLayout.height > theoricalHeight ? WindowLayout.height : theoricalHeight;
    const mainHeight = entireHeight - Layout.TopBarHeight;
    return (
        <Grid container width={WindowLayout.width} height={entireHeight} sx={{ overflow: 'hidden' }}>
            <Grid item width={WindowLayout.width} height={Layout.TopBarHeight}  sx={{ overflow: 'hidden' }}>
                <GuestBar />
            </Grid>
            <Grid item 
                width={WindowLayout.width} 
                height={mainHeight} 
                sx={{ background: Palette.background.main, overflow: 'hidden' }}>
                {children}
            </Grid>
        </Grid>
    );
}

export default GuestLayout;