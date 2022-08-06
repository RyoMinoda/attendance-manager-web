import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../models/utils/UiParametersContext";
import { useWindowSize } from "../../models/utils/WindowLayout";
import MemberBreadcrumbs, { MemberBreadcrumbsProps } from "../atoms/breadcrumbs/MemberBreadcrumbs";
import MemberBar from "../molecules/top_bars/MemberBar";

export type MemberLayoutProps = {
    breadcrumbLinks: Array<string>,
    height: number
}

const MemberLayout = ({ props, children }: { props: MemberLayoutProps, children: React.ReactNode }) => {
    const { breadcrumbLinks, height } = props;
    const uiParameter = useContext(UiParametersContext);
    const { Layout, Palette } = uiParameter;
    const WindowLayout = useWindowSize();
    const breadcrumbProps: MemberBreadcrumbsProps = {
        links: breadcrumbLinks,
    }
    const theoricalHeight = height + Layout.TopBarHeight + Layout.BreadcrumbHeight + Layout.PageMarginBottom * 8;
    const entireHeight = WindowLayout.height > theoricalHeight ? theoricalHeight : WindowLayout.height;
    const mainHeight = entireHeight - Layout.TopBarHeight - Layout.BreadcrumbHeight;
    return (
        <Box width={WindowLayout.width} height={WindowLayout.height} sx={{ overflowX: "hidden", overflowY: "auto", scrollbarWidth: "none" }}>
            <Grid container width={WindowLayout.width} height={entireHeight}>
                <Grid item width={WindowLayout.width} height={Layout.TopBarHeight}>
                    <MemberBar />
                </Grid>
                <Grid item width={WindowLayout.width} height={Layout.BreadcrumbHeight}>
                    <MemberBreadcrumbs props={breadcrumbProps} />
                </Grid>
                <Grid item width={WindowLayout.width} height={mainHeight} sx={{ background: Palette.background.main, overflowY: "auto", overflowX: 'hidden', position: "relative" }}>
                    <Box width={WindowLayout.width}>
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MemberLayout;