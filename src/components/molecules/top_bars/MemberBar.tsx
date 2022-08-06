import { Fade, Grid, Paper, Popper, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { GridColumnItem } from "../../../models/utils/GridItem";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { useWindowSize } from "../../../models/utils/WindowLayout";
import TopLogoButton, { TopLogoButtonProps } from "../../atoms/buttons/TopLogoButton";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Path } from "../../../models/utils/PathType";
import { SxProps, Theme } from "@mui/system";
import TopBarLinkButton, { TopBarLinkButtonProps } from "../../atoms/buttons/TopBarLinkButton";
import TopBarPopupButton, { TopBarPopupButtonProps } from "../../atoms/buttons/TopBarPopupButton";
import { container } from "tsyringe";
import { NotificationRepository } from "../../../repositories/NotificationRepository";
import { UserParametersContext } from "../../../models/utils/UserParametersContext";

const MemberBar = () => {
    const [ isOpenNotification, setIsOpenNotification ] = useState(false);
    const [ notifications, setNotifications ] = useState(Array<Notification>());
    const [ error, setError ] = useState(false);
    const [ anchorElement, setAnchorElement ] = useState<HTMLButtonElement | null>(null);
    const { Layout, Palette } = useContext(UiParametersContext);
    const { width, height } = useWindowSize();
    const { MyConfig } = useContext(UserParametersContext);
    const websocket = new WebSocket("wss://127.0.0.1:8080/notifications/push");
    useEffect(() => {
        const notificationRepository = container.resolve(NotificationRepository);
        const notificationsPromise = notificationRepository.GetNotifications(MyConfig);
        notificationsPromise.then((result) => {
            if (result.Data !== null) {
                setNotifications(result.Data);
            }
        }).catch(() => {
            setError(true);
        });
    }, [notifications]);

    useEffect(() => {
        websocket.onopen = () => {
            console.log('Connected')
            websocket.send(JSON.stringify({
                message: "inputValue"
              }));
        };
        websocket.onmessage = (e) => {
            console.log("Get message from server: " + e.data)
        };
    }, [])

    const totalColumn = 20;
    const topLogoXs = 5;
    const topLogoButtonProps: TopLogoButtonProps = {
        width: topLogoXs / totalColumn * width,
        height: Layout.TopBarHeight
    }
    const textButtonXs = 1.5;
    const commonProps: TopBarLinkButtonProps = {
        text: "",
        width: textButtonXs / totalColumn * width,
        height: Layout.TopBarHeight - 2,
        icon: <></>,
        path: Path.DashboardTop
    }
    const notificationButtonProps: TopBarPopupButtonProps = {
        ...commonProps, 
        text: "Notification", 
        icon: <NotificationsIcon />, 
        onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => {
            setIsOpenNotification(!isOpenNotification);
            setAnchorElement(event.currentTarget);
        }
    }
    const myAccountButtonProps: TopBarLinkButtonProps = {
        ...commonProps, text: "MY ACCOUNT", icon: <PersonIcon />, path: Path.MyAccount,
    }
    const signUpButtonProps: TopBarLinkButtonProps = {
        ...commonProps, text: "SIGN OUT", icon: <LogoutIcon />, path: Path.SignOut,
    }
    const gridItems: Array<GridColumnItem> = [
        { column: topLogoXs, totalColumn, children: <TopLogoButton props={topLogoButtonProps} /> },
        { column: totalColumn - topLogoXs - textButtonXs * 3 - 0.2, totalColumn, children: <></> },
        { column: textButtonXs, totalColumn, children: <TopBarPopupButton props={notificationButtonProps} /> },
        { column: textButtonXs, totalColumn, children: <TopBarLinkButton props={myAccountButtonProps} /> },
        { column: textButtonXs, totalColumn, children: <TopBarLinkButton props={signUpButtonProps} /> }
    ]
    const containerStyle: SxProps<Theme> = {
        height: Layout.TopBarHeight, 
        background: Palette.primary.main, 
        width: width, 
        overflow: "hidden"
    }
    return (
        <>
            <Grid container sx={containerStyle}>
                {gridItems.map((x, i) => {
                    const { column, totalColumn, children } = x;
                    const innerWidth = width / totalColumn * column;
                    return (
                        <Grid item key={i} sx={{ height: Layout.TopBarHeight, width: innerWidth, }}>
                            {children}
                        </Grid>
                    )
                })}
            </Grid>
            <Popper open={isOpenNotification} anchorEl={anchorElement} placement="bottom" transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </>
    );
}

export default MemberBar;