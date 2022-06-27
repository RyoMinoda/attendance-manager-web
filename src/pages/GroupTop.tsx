import { Grid } from "@mui/material";
import { useState } from "react";
import MemberLayout, { MemberLayoutProps } from "../components/templates/MemberLayout";
import { Path } from "../models/utils/PathType";
import { useWindowSize } from "../models/utils/WindowLayout";

const GroupTop = () => {
    const WindowLayout = useWindowSize();
    const [entireHeight, setEntireHeight ] = useState<number>(WindowLayout.height);
    const memberLayoutProps: MemberLayoutProps = {
        breadcrumbLinks: [ Path.DashboardTop, Path.GroupTop ],
        height: entireHeight
    }
    return (
        <MemberLayout props={memberLayoutProps}>
            
        </MemberLayout>
    );
}

export default GroupTop;