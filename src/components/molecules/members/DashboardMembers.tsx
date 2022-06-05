import { useEffect } from "react";
import { Member } from "../../../models/states/Member";

export type DashboardMemberProps = {
    height: number,
    width: number,
    members: Array<Member>;
}


const DashboardMember = ({ props }: { props: DashboardMemberProps }) => {
    return <></>;
}

export default DashboardMember;