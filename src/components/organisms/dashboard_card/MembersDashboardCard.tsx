import { Box, Card, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { Member } from "../../../models/states/Member";
import { MemberRepository } from "../../../repositories/MemberRepository";
import DashboardMember, { DashboardMemberProps } from "../../molecules/members/DashboardMembers";
import { DashboardCardProps } from "./DashboardCardProps";


const MembersDashboardCard = ({ props }: { props: DashboardCardProps }) => {
    const [ members, setMembers ] = useState<Array<Member>>(Array<Member>());
    const { width, height, headerHeight, headerFontSize, gridMarginTB, innerContainerTopBottomMargin } = props;
    const containerHeight = height - 2 * gridMarginTB * 8;
    const contentHeight = containerHeight - headerHeight;
    const innerContainerHeight = contentHeight - 2 * innerContainerTopBottomMargin * 8;
    useEffect(() => {
        const memberRepository = container.resolve(MemberRepository);
        const membersResult = memberRepository.GetMembers();
        if (membersResult.Data !== null) {
            // setMembers(membersResult.Data);
        }
    }, []);
    const dashboardMemberProps: DashboardMemberProps = {
        width,
        height: innerContainerHeight,
        members
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