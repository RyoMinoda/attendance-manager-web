import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import { Member, MemberArray } from "../../../models/states/Member";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DashboardMemberCard, { DashboardMemberCardProps } from "./DashboardMemberCard";
import { Group } from "../../../models/states/Group";
import { useState } from "react";
import { SelectorProps } from "../../atoms/selector/SelectorProps";
import DashboardMembersSelector from "../../atoms/selector/DashboardMembersSelector";
import { DashboardMembersFilterUnion } from "../../atoms/selector/enum/DashboardMembersFilterType";

export type DashboardMemberProps = {
    height: number,
    width: number,
    members: Array<Member>;
    groups: Array<Group>;
    innerContainerTopBottomMargin: number;
}


const DashboardMember = ({ props }: { props: DashboardMemberProps }) => {
    const { width, height, members, groups, innerContainerTopBottomMargin } = props;
    const [ filterType, setFilterType ] = useState<string>(DashboardMembersFilterUnion.Name);
    const inputSx = 5;
    const inputBottomPadding = 1;
    const inputEntireHeight = 60;
    const inputMarginTopBottom = 1;
    const inputInnerHeight = inputEntireHeight - inputBottomPadding * 8 * 2;
    const membersHeight = height - inputEntireHeight - innerContainerTopBottomMargin * 8;
    const inputWidth = inputSx / 12 * width;
    const spaceContainer = 1;
    const memberContainerSx = 12 - 2 * spaceContainer;
    const memberContainerHeight = membersHeight / 4.5;
    const memberContainerWidth = memberContainerSx / 12 * width;
    const selectorProps: SelectorProps<string> = {
        width: width * 1 / 4,
        height: 60,
        marginLeftRight: 4,
        marginTopBottom: inputBottomPadding,
        value: filterType,
        setValue: setFilterType,
    }
    const memberArray = new MemberArray(members, groups);
    return (
        <Box width={width} height={height}>
            <Grid container>
                <Grid item sx={{ width, height: inputEntireHeight }}>
                    <Grid container sx={{ width, height: inputEntireHeight }}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={inputSx}>
                            <TextField
                                id="standard-search"
                                type="search"
                                variant="standard"
                                sx={{ 
                                    height: inputInnerHeight, 
                                    width: inputWidth, 
                                    minHeight: 0, 
                                    marginTop: inputMarginTopBottom
                                }}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <PersonSearchIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                        </Grid>
                        <Grid item xs={3}>
                            <DashboardMembersSelector props={selectorProps} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{ width, height: membersHeight, overflowY: 'scroll', scrollbarWidth: 'none' }}>
                    <Grid container sx={{ width }}>
                        <Grid item xs={spaceContainer}></Grid>
                        <Grid item xs={memberContainerSx}>
                            {memberArray
                            .orderby(filterType)
                            .map((x, i) => {
                                const targetGroups = groups.filter(y => x.GroupIds.includes(y.GroupId));
                                const cardProps: DashboardMemberCardProps = {
                                    height: memberContainerHeight,
                                    width: memberContainerWidth,
                                    member: x,
                                    groups: targetGroups,
                                }
                                return <DashboardMemberCard props={cardProps} key={"memberCard" + i.toString()} />;
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DashboardMember;