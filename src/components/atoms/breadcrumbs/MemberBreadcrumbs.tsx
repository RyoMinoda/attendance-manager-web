import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { useWindowSize } from "../../../models/utils/WindowLayout";
import { Link, useLocation, useParams } from "react-router-dom";
import { PathTextDictionary } from "../../../models/utils/PathType";
import { Group } from "../../../models/states/Group";
import { container } from "tsyringe";
import { GroupRepository } from "../../../repositories/GroupRepository";
import { UserParametersContext } from "../../../models/utils/UserParametersContext";

export type MemberBreadcrumbsProps = {
    links: Array<string>;
}


export const MemberBreadcrumbs = ({ props }: { props: MemberBreadcrumbsProps }) => {
    const { links } = props;
    const uiParameters = useContext(UiParametersContext);
    const { Layout, Palette, FontSize } = uiParameters;
    const { groupId } = useParams();
    const { MyProfile } = useContext(UserParametersContext);
    const [ linkState, setLinkState ] = useState(links);

    const windowSize = useWindowSize();
    const height = Layout.BreadcrumbHeight - 1;
    const sidePadding = windowSize.width * 0.02 / 8;
    const paddingTop = height * 0.3 / 8;
    const breadcrumbHeight = height - 2 * paddingTop;
    const width = windowSize.width - 2 * 8 * sidePadding;
    const fontSize = FontSize.normal;

    useEffect(() => {
        if (groupId != null) {
            const groupRepository = container.resolve(GroupRepository);
            const groupsPromise = groupRepository.GetGroup(MyProfile, groupId);
            groupsPromise.then((result) => {
                if (result.Data !== null) {
                    const target = [ ...links, result.Data.Name ];
                    setLinkState(target);
                }
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupId]);

    return (
        <Grid container>
            <Grid item xs={12} sx={{ borderBottom: 'solid 1px', borderBottomColor: Palette.primary.light }}>
                <Box width={width} height={height} bgcolor={Palette.background.main} paddingLeft={sidePadding} paddingRight={sidePadding}>
                    <Breadcrumbs sx={{ height: breadcrumbHeight, paddingTop, width: windowSize.width, fontSize }}>
                        {linkState.map((x, i) => {
                            const text = PathTextDictionary.getValueOrDefault(x, x);
                            const key = "breadcrumb-link" + i;
                            const isActive = i !== linkState.length - 1;
                            if (isActive) {
                                return (
                                    <Link color={Palette.text.secondary} to={{ pathname: "/" + x }} key={key} style={{ textDecoration: "none", color: Palette.text.secondary }}>
                                        {text}
                                    </Link>
                                )
                            }
                            return (
                                <Typography color={Palette.text.primary} key={key} sx={{ fontSize: 'inherit' }}>
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