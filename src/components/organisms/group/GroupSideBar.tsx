import { Grid } from "@mui/material";
import { useState } from "react";
import { Group } from "../../../models/states/Group";
import SideGroupListSection, { SideGroupListSectionProps } from "../../molecules/groups/SideGroupListSection";
import GroupOperationSection, { SideGroupOperationSectionProps } from "../../molecules/groups/SideGroupOperationSection";

export type GroupSideBarProps = {
    width: number,
    height: number,
    groups: Array<Group>
}

const GroupSideBar = ({ props }: { props: GroupSideBarProps }) => {
    const { width, height, groups } = props;
    const [ searchString, setSearchString ] = useState("");
    const operationSectionHeight = 120;
    const mainHeight = height - operationSectionHeight;
    const operationProps: SideGroupOperationSectionProps = {
        height: operationSectionHeight,
        width, setSearchString, searchString,
    }
    const listProps: SideGroupListSectionProps = {
        searchString, groups,
        height: mainHeight,
        width,
    }
    if (width === 0) return <></>;
    return (
        <Grid container width={width} height={height}>
            <Grid item width={width} height={operationSectionHeight}>
                <GroupOperationSection props={operationProps} />
            </Grid>
            <Grid item width={width} height={mainHeight}>
                <SideGroupListSection props={listProps} />
            </Grid>
        </Grid>
    )
}

export default GroupSideBar;