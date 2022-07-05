import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { container } from "tsyringe";
import MyInvitations, { MyInvitationsProps } from "../components/organisms/myaccount/MyInvitations";
import MyProfileView, { MyProfileViewProps } from "../components/organisms/myaccount/MyProfileVIew";
import MemberLayout, { MemberLayoutProps } from "../components/templates/MemberLayout";
import { Invitation } from "../models/states/Invitation";
import { defaultUserDetail, UserDetail } from "../models/states/UserDetail";
import { Path } from "../models/utils/PathType";
import { UiParametersContext } from "../models/utils/UiParametersContext";
import { UserParametersContext } from "../models/utils/UserParametersContext";
import { useWindowSize } from "../models/utils/WindowLayout";
import { InvitationRepository } from "../repositories/InvitationRepository";

const MyAccount = () => {
    const { height, type, width } = useWindowSize();
    const { MyProfile } = useContext(UserParametersContext);
    const { Layout } = useContext(UiParametersContext);
    const [ error, setError ] = useState(false);
    const [ entireHeight, setEntireHeight ] = useState<number>(height);
    const [ userDetail, setUserDetail ] = useState<UserDetail>(defaultUserDetail);
    const [ invitations, setInvitations ] = useState<Array<Invitation>>(Array<Invitation>());
    const marginSide = (width - Layout.MainAreaWidth) / 8 / 2;
    const memberLayoutProps: MemberLayoutProps = {
        breadcrumbLinks: [ Path.DashboardTop, Path.MyAccount ],
        height: entireHeight
    }
    const titleHeight = 30;
    const titleMarginLeft = 2;
    const myProfileViewProps: MyProfileViewProps = {
        width: Layout.MainAreaWidth, height: 800,
        titleHeight, titleMarginLeft, userDetail
    }
    const invitationHeight = 80;
    const myInvitationsProps: MyInvitationsProps = {
        width: Layout.MainAreaWidth, titleHeight,
        marginTopBottom: 2,
        itemHeight: invitationHeight,
        invitations, titleMarginLeft,
    }
    useEffect(() => {
        setEntireHeight(height);

        const invitationRepository = container.resolve(InvitationRepository);
        const invitationPromise = invitationRepository.GetInvitations(MyProfile);
        invitationPromise.then((result) => {
            if (result.Data !== null) {
                setInvitations(result.Data);
            }
        }).catch(() => {
            setError(true);
        });
        
    }, [MyProfile, height]);

    return (
        <MemberLayout props={memberLayoutProps}>
            <Box width={Layout.MainAreaWidth} marginLeft={marginSide}>
                <Grid container marginTop={2} marginBottom={Layout.PageMarginBottom}>
                    <Grid item>
                        <MyProfileView props={myProfileViewProps} /> 
                    </Grid>
                    <Grid item>
                        <MyInvitations props={myInvitationsProps} />
                    </Grid>
                </Grid>
            </Box>       
        </MemberLayout>
    );
}

export default MyAccount;