import { Box, Card, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { container } from "tsyringe";
import { Group } from "../../../models/states/Group";
import { Member } from "../../../models/states/Member";
import { UserParametersContext } from "../../../models/utils/UserParametersContext";
import { GroupRepository } from "../../../repositories/GroupRepository";
import { MemberRepository } from "../../../repositories/MemberRepository";
import DashboardMember, { DashboardMemberProps } from "../../molecules/members/DashboardMembers";
import { DashboardCardProps } from "./DashboardCardProps";

const MembersDashboardCard = ({ props }: { props: DashboardCardProps }) => {
    const [ members, setMembers ] = useState<Array<Member>>(Array<Member>());
    const [ groups, setGroups ] = useState<Array<Group>>(Array<Group>());
    const [ error, setError ] = useState<boolean>(false);
    const { MyConfig } = useContext(UserParametersContext);
    const { width, height, headerHeight, headerFontSize, gridMarginTB, innerContainerTopBottomMargin } = props;
    const containerHeight = height - 2 * gridMarginTB * 8;
    const contentHeight = containerHeight - headerHeight;
    const innerContainerHeight = contentHeight - 2 * innerContainerTopBottomMargin * 8;
    useEffect(() => {
        const memberRepository = container.resolve(MemberRepository);
        const groupRepository = container.resolve(GroupRepository);
        const membersPromise = memberRepository.GetMembers(MyConfig);
        membersPromise.then((result) => {
            if (result.Data !== null) {
                setMembers(result.Data);
            }
        }).catch(() => {
            setError(true);
        });
        const groupsPromise = groupRepository.GetGroups(MyConfig);
        groupsPromise.then((result) => {
            if (result.Data !== null) {
                setGroups(result.Data);
            }
        }).catch(() => {
            setError(true);
        });
    }, [ MyConfig ]);
    const dashboardMemberProps: DashboardMemberProps = {
        width,
        height: innerContainerHeight,
        members, groups,
        innerContainerTopBottomMargin
    }
    return (
        <Card sx={{ width, height }}>
            <Grid container sx={{ width, height: containerHeight, marginTop: gridMarginTB, marginBottom: gridMarginTB }}>
                <Grid item sx={{ height: headerHeight }}  display="flex" alignItems="center">
                    <Typography fontSize={headerFontSize} marginLeft={4}>
                        Members
                    </Typography>
                </Grid>
                <Grid item sx={{ height: contentHeight, width }}>
                    <Box width={width} 
                        height={innerContainerHeight}
                        marginTop={innerContainerTopBottomMargin}>
                            <DashboardMember props={dashboardMemberProps} />
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}

export default MembersDashboardCard;