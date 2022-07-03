import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Group } from "../../../models/states/Group";
import { Organization } from "../../../models/states/Organization";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import GroupTopListItem, { GroupTopListItemProps } from "../../atoms/list_item/GroupTopListItem";

export type GroupTopListProps = {
    width: number, 
    height: number,
    groups: Array<Group>,
    organizations: Array<Organization>
}


const GroupTopList = ({ props }: { props: GroupTopListProps }) => {
    const { width, height, groups, organizations } = props;
    const { FontSize, Palette } = useContext(UiParametersContext);
    const itemHeight = 120;
    const itemInnerWidth = width;
    const organizationHeight = 35;
    return (
        <Box width={width} height={height} sx={{ overflowY: "scroll", overflowX: "hidden", scrollbarWidth: "none" }}>
            <Grid container>
                {organizations.map((organization) => {
                    const target = groups.filter((x) => x.OrganizationId === organization.OrganizationId);
                    return (
                      <Grid item>
                        <Grid container>
                            <Grid item height={organizationHeight} width={width} display="flex" justifyContent="flex-start" alignItems="center">
                                <Typography fontSize={FontSize.larger} color={Palette.text.primary} marginLeft={2}>
                                    {organization.Name} ({target.length})
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    {target
                                        .map((group) => {
                                        const listItemProps: GroupTopListItemProps = {
                                            group,
                                            width: itemInnerWidth,
                                            height: itemHeight,
                                        }
                                        return  (
                                            <Grid item>
                                                <Box width={width} height={itemHeight}>
                                                    <GroupTopListItem props={listItemProps} />
                                                </Box>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                      </Grid>  
                    );
                })}
            </Grid>
        </Box>
    );
}

export default GroupTopList;