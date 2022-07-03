import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { Group } from "../../../models/states/Group";
import { Member } from "../../../models/states/Member";
import { Organization } from "../../../models/states/Organization";
import GroupTopHeader, { GroupTopHeaderProps } from "../../molecules/groups/GroupTopHeader";
import GroupTopList, { GroupTopListProps } from "../../molecules/groups/GroupTopList";

export type GroupTopContentProps = {
    width: number,
    height: number,
    groups: Array<Group>,
    members: Array<Member>,
    organizations: Array<Organization>
}


const GroupTopContent = ({ props }: { props: GroupTopContentProps }) => {
    const { width, height, groups } = props;
    const [ searchString, setSearchString ] = useState(""); 
    const headerHeight = 100;
    const contentHeight = height - headerHeight;
    const headerProps: GroupTopHeaderProps = {
        width,
        height: headerHeight,
        searchString, setSearchString,
    }
    const listProps: GroupTopListProps = {
        ...props,
        width,
        height: height - headerHeight,
    }
    return (
        <Box width={width} height={height}>
            <Grid container width={width} height={height}>
                <Grid item width={width} height={headerHeight}>
                    <GroupTopHeader props={headerProps} />
                </Grid>
                <Grid item width={width} height={contentHeight}>
                    <GroupTopList props={listProps} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default GroupTopContent;