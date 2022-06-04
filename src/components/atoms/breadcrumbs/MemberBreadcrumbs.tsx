import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { useContext } from "react";
import { PathTextDictionary } from "../../../models/utils/PathType";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { useWindowSize } from "../../../models/utils/WindowLayout";


export type MemberBreadcrumbsProps = {
    links: Array<string>;
}


export const MemberBreadcrumbs = ({ props }: { props: MemberBreadcrumbsProps }) => {
    const { links } = props;
    const uiParameters = useContext(UiParametersContext);
    const { Layout, Palette, FontSize } = uiParameters;
    const windowSize = useWindowSize();
    const height = Layout.BreadcrumbHeight - 1;
    const sidePadding = windowSize.width * 0.02 / 8;
    const paddingTop = height * 0.3 / 8;
    const breadcrumbHeight = height - 2 * paddingTop;
    const width = windowSize.width - 2 * 8 * sidePadding;
    const fontSize = FontSize.normal;
    return (
        <Grid container>
            <Grid item xs={12} sx={{ borderBottom: 'solid 1px', borderBottomColor: Palette.primary.light }}>
                <Box width={width} height={height} bgcolor={Palette.background.main} paddingLeft={sidePadding} paddingRight={sidePadding}>
                    <Breadcrumbs sx={{ height: breadcrumbHeight, paddingTop, width: windowSize.width, fontSize }}>
                        {links.map((x, i) => {
                            const text = PathTextDictionary.getValue(x);
                            const isActive = i !== links.length - 1;
                            if (isActive) {
                                return (
                                    <Link underline="hover" color={Palette.text.secondary} href={x} key={"breadcrumb-link" + i}>
                                        {text}
                                    </Link>
                                )
                            }
                            return (
                                <Typography color={Palette.text.primary} key={"breadcrumb-link" + i} sx={{ fontSize: 'inherit' }}>
                                    {text}
                                </Typography>
                            )
                        })}
                    </Breadcrumbs>
                </Box>
            </Grid>
        </Grid>
    );
}

export default MemberBreadcrumbs;