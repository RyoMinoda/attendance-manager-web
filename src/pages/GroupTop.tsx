import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { container } from "tsyringe";
import GroupTopContent, { GroupTopContentProps } from "../components/organisms/group/GroupTopContent";
import MemberLayout, { MemberLayoutProps } from "../components/templates/MemberLayout";
import { Group } from "../models/states/Group";
import { Member } from "../models/states/Member";
import { Organization } from "../models/states/Organization";
import { Path } from "../models/utils/PathType";
import { UiParametersContext } from "../models/utils/UiParametersContext";
import { UserParametersContext } from "../models/utils/UserParametersContext";
import { useWindowSize } from "../models/utils/WindowLayout";
import { GroupRepository } from "../repositories/GroupRepository";
import { MemberRepository } from "../repositories/MemberRepository";
import { OrganizationRepository } from "../repositories/OrganizationRepository";

const GroupTop = () => {
    const { height, type, width } = useWindowSize();
    const [ entireHeight, setEntireHeight ] = useState<number>(height);
    const [ error, setError ] = useState(false);

    const [ groups, setGroups ] = useState<Array<Group>>(Array<Group>());
    const [ members, setMembers ] = useState<Array<Member>>(Array<Member>());
    const [ organizations, setOrganizations ] = useState<Array<Organization>>(Array<Organization>());

    const { Layout } = useContext(UiParametersContext);
    const { MyConfig } = useContext(UserParametersContext);

    const memberLayoutProps: MemberLayoutProps = {
        breadcrumbLinks: [ Path.DashboardTop, Path.GroupTop ],
        height: entireHeight
    }
    const containerHeight = entireHeight - Layout.BreadcrumbHeight - Layout.TopBarHeight;

    useEffect(() => {
        setEntireHeight(height);

        const memberRepository = container.resolve(MemberRepository);
        const groupRepository = container.resolve(GroupRepository);
        const organizationRepository = container.resolve(OrganizationRepository);
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
        const organizationPromise = organizationRepository.GetOrganizations(MyConfig);
        organizationPromise.then((result) => {
            if (result.Data !== null) {
                setOrganizations(result.Data);
            }
        }).catch(() => {
            setError(true);
        })
    }, [MyConfig, height]);

    const mainWidth = Layout.MainAreaWidth;
    var marginSide = 0;
    if (width > mainWidth) {
        marginSide = (width - mainWidth) / 2 / 8;
    }

    const groupTopProps: GroupTopContentProps = {
        width: Layout.MainAreaWidth,
        height: containerHeight,
        groups, members, organizations
    }

    return (
        <MemberLayout props={memberLayoutProps}>
            <Box width={mainWidth} marginLeft={marginSide}>
                <GroupTopContent props={groupTopProps} />
            </Box>
        </MemberLayout>
    );
}

export default GroupTop;