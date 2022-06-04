import { useEffect, useState } from "react";
import DashboardTopContent, { DashboardTopContentProps } from "../components/organisms/DashboardTopContent";
import MemberLayout, { MemberLayoutProps } from "../components/templates/MemberLayout";
import { Path } from "../models/utils/PathType";
import { useWindowSize } from "../models/utils/WindowLayout";

const DashboardTop = () => {
    const WindowLayout = useWindowSize();
    const [entireHeight, setEntireHeight ] = useState<number>(WindowLayout.width);
    const memberLayoutProps: MemberLayoutProps = {
        breadcrumbLinks: [ Path.DashboardTop ],
        height: entireHeight
    }
    const dashboardProps: DashboardTopContentProps = {
        setEntireHeight
    }
    return (
        <MemberLayout props={memberLayoutProps}>
            <DashboardTopContent props={dashboardProps} />
        </MemberLayout>
    );
}

export default DashboardTop;