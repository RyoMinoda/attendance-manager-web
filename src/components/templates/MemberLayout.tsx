import { Grid } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../models/utils/UiParametersContext";
import { useWindowSize } from "../../models/utils/WindowLayout";
import MemberBreadcrumbs, { MemberBreadcrumbsProps } from "../atoms/breadcrumbs/MemberBreadcrumbs";
import MemberBar from "../molecules/bars/MemberBar";

export type MemberLayoutProps = {
    breadcrumbLinks: Array<string>,
    height: number,
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
    const entireHeight = WindowLayout.height > theoricalHeight ? WindowLayout.height : theoricalHeight;
    const mainHeight = entireHeight - Layout.TopBarHeight - Layout.BreadcrumbHeight;
    return (
        <Grid container width={WindowLayout.width} height={entireHeight} sx={{ overflowY: 'scroll', overflowX: 'hidden' }}>
            <Grid item width={WindowLayout.width} height={Layout.TopBarHeight}  sx={{ overflow: 'hidden' }}>
                <MemberBar />
            </Grid>
            <Grid item width={WindowLayout.width} height={Layout.BreadcrumbHeight}>
                <MemberBreadcrumbs props={breadcrumbProps} />
            </Grid>
            <Grid item width={WindowLayout.width} height={mainHeight} sx={{ background: Palette.background.main, overflow: 'hidden' }}>
                {children}
            </Grid>
        </Grid>
    );
}

export default MemberLayout;