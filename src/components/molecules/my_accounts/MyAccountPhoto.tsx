import { Box, Grid } from "@mui/material";
import { UserDetail } from "../../../models/states/UserDetail";
import IconSwitchButton, { IconSwitchButtonProps } from "../../atoms/buttons/IconSwitchButton";
import UserIcon, { UserIconProps } from "../../atoms/icons/UserIcon";
import UploadIcon from '@mui/icons-material/Upload';
import { useContext, useState } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type MyAccountPhotoProps = {
    width: number,
    height: number,
    userDetail: UserDetail
}

const MyAccountPhoto = ({ props }: { props: MyAccountPhotoProps }) => {
    const { width, height, userDetail } = props;
    const [ openModal, setOpenModal ] = useState(false);
    const { Layout, Palette } = useContext(UiParametersContext);
    const marginLeft = (width * 0.25) / 8;
    const marginTop = (height * 0.1) / 8;
    const containerWidth = width - 1.5 * marginLeft * 8;
    const containerHeight = height - marginTop * 8;
    const pictureHeight = containerHeight * 0.35;
    const buttonContainerHeight = containerHeight * 0.15;
    const iconProps: UserIconProps = {
        width: containerWidth,
        height: pictureHeight,
        picture: userDetail.Pictiure,
        color: Palette.text.light,
    }
    const swtichButtonProps: IconSwitchButtonProps = {
        width: containerWidth * 0.7,
        height: Layout.DefaultButtonHeight,
        Icon: UploadIcon,
        title: "Upload",
        value: true,
        isActive: false,
        activeColor: Palette.primary.main
    }
    const entireHeight = pictureHeight + buttonContainerHeight;
    return (
        <Box width={width} height={height}>
            <Grid container width={containerWidth} height={entireHeight} marginLeft={marginLeft} marginTop={marginTop}>
                <Grid item 
                    display="flex" justifyContent="center" alignItems="center"
                    height={pictureHeight} width={containerWidth}>
                    <UserIcon props={iconProps} />
                </Grid>
                <Grid item 
                    display="flex" justifyContent="center" alignItems="center"
                    height={buttonContainerHeight} 
                    width={containerWidth}>
                    <IconSwitchButton props={swtichButtonProps} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default MyAccountPhoto;