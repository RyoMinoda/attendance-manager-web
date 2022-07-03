import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { container } from "tsyringe";
import GroupMainContent, { GroupMainContentProps } from "../components/organisms/group/GroupMainContent";
import GroupSideBar, { GroupSideBarProps } from "../components/organisms/group/GroupSideBar";
import MemberLayout, { MemberLayoutProps } from "../components/templates/MemberLayout";
import { Group } from "../models/states/Group";
import { Member } from "../models/states/Member";
import { Path } from "../models/utils/PathType";
import { UiParametersContext } from "../models/utils/UiParametersContext";
import { UserParametersContext } from "../models/utils/UserParametersContext";
import { useWindowSize } from "../models/utils/WindowLayout";
import { WindowLayoutType } from "../models/utils/WindowLayoutType";
import { GroupRepository } from "../repositories/GroupRepository";
import { MemberRepository } from "../repositories/MemberRepository";

const GroupDetail = () => {
    const { height, type, width } = useWindowSize();
    const [ entireHeight, setEntireHeight ] = useState<number>(height);
    const [ error, setError ] = useState(false);
    const [ groups, setGroups ] = useState<Array<Group>>(Array<Group>());
    const [ members, setMembers ] = useState<Array<Member>>(Array<Member>());
    
    const { Layout } = useContext(UiParametersContext);
    const { MyProfile } = useContext(UserParametersContext);

    const memberLayoutProps: MemberLayoutProps = {
        breadcrumbLinks: [ Path.DashboardTop, Path.GroupTop ],
        height: entireHeight
    }
    const containerHeight = entireHeight - Layout.BreadcrumbHeight - Layout.TopBarHeight;
    const sideBarWidth = type === WindowLayoutType.PC ? 280 : 0;
    const mainWidth = width - sideBarWidth;
    const groupSideBarProps: GroupSideBarProps = {
        width: sideBarWidth,
        height: containerHeight,
        groups,
    }
    const groupMainProps: GroupMainContentProps = {
        width: width - sideBarWidth,
        height: containerHeight,
        groups, members
    }
    useEffect(() => {
        setEntireHeight(height);

        const memberRepository = container.resolve(MemberRepository);
        const groupRepository = container.resolve(GroupRepository);
        const membersPromise = memberRepository.GetMembers(MyProfile);
        membersPromise.then((result) => {
            if (result.Data !== null) {
                setMembers(result.Data);
            }
        }).catch(() => {
            setError(true);
        });
        const groupsPromise = groupRepository.GetGroups(MyProfile);
        groupsPromise.then((result) => {
            if (result.Data !== null) {
                setGroups(result.Data);
            }
        }).catch(() => {
            setError(true);
        });

    }, [MyProfile, height]);
    return (
        <MemberLayout props={memberLayoutProps}>
            <Grid container>
                <Grid width={sideBarWidth} height={containerHeight}>
                    <GroupSideBar props={groupSideBarProps} />
                </Grid>
                <Grid width={mainWidth} height={containerHeight}>
                    <GroupMainContent props={groupMainProps} />
                </Grid>
            </Grid>
        </MemberLayout>
    );
}

export default GroupDetail;