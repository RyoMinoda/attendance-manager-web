import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";
import { Group } from "../../../models/states/Group";
import { Path } from "../../../models/utils/PathType";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import DetailViewButton, { DetailViewButtonProps } from "../buttons/DetailViewButton";
import EditButton, { EditButtonProps } from "../buttons/EditButton";
import GroupItemIcon, { GroupItemIconProps } from "../icons/GroupItemIcon";


export type GroupTopListItemProps = {
    width: number,
    height: number,
    group: Group
}

const GroupTopListItem = ({ props }: { props: GroupTopListItemProps }) => {
    const { width, height, group } = props;
    const itemHeight = height - 16;
    const { Palette } = useContext(UiParametersContext);
    const outerBoxStyle: SxProps<Theme> = {
        overflow: "hidden", 
        background: Palette.background.component, 
        borderRadius: 1,
        boxShadow: "none"
    }
    const titleHeight = itemHeight * 0.45;
    const contentHeight = itemHeight - titleHeight;
    const titleWidth = width * 0.5;
    const iconWidth = width * 0.05;
    const operationButtonWidth = width * 0.15;
    const buttonsWidth = width - titleWidth - operationButtonWidth * 2 - iconWidth;
    const buttonSidePadding = 4;
    const buttonTopBottomPadding = 1.2;
    const buttonHeight = titleHeight - 2 * buttonTopBottomPadding * 8;
    const bottomMarginSide = 2;
    const editButtonProps: EditButtonProps = {
        width: operationButtonWidth - 2 * buttonSidePadding * 8,
        path: Path.CreateGroup,
        height: buttonHeight,
        isActive: group.IsEditable, 
    }
    const viewButtonProps: DetailViewButtonProps = {
        ...editButtonProps,
        isActive: group.IsViewable,
        path: Path.GroupDetail,
        id: group.GroupId,
    }
    const iconProps: GroupItemIconProps = {
        color: group.Color,
        initial: group.Name[0],
        size: buttonHeight,
        isViewable: group.IsViewable,
        isEditable: group.IsEditable
    }
    const bottomWidth = width - 2 * bottomMarginSide * 8;
    return (
        <Box width={width} height={itemHeight} sx={outerBoxStyle}>
            <Grid container width={width} height={itemHeight}>
                <Grid item width={width} height={titleHeight}>
                    <Grid container width={width} height={titleHeight}>
                        <Grid item width={iconWidth} height={titleHeight} display="flex" justifyContent="center" alignItems="center">
                            <GroupItemIcon props={iconProps} />
                        </Grid>
                        <Grid item width={titleWidth} height={titleHeight} display="flex" justifyContent="flex-start" alignItems="center">
                            <Typography color={Palette.text.primary} paddingLeft={2}>
                                {group.Name}
                            </Typography>
                        </Grid>
                        <Grid item width={buttonsWidth} height={titleHeight}></Grid>
                        <Grid item width={operationButtonWidth} height={titleHeight}>
                            <Box display="flex" justifyContent="flex-end" alignItems="center" width={operationButtonWidth} height={titleHeight}>
                                <DetailViewButton props={viewButtonProps} />
                            </Box>
                        </Grid>
                        <Grid item width={operationButtonWidth} height={titleHeight}>
                            <Box display="flex" justifyContent="center" alignItems="center" width={operationButtonWidth} height={titleHeight}>
                                <EditButton props={editButtonProps} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item width={width} height={contentHeight}>
                    <Box width={bottomWidth} height={contentHeight} marginLeft={bottomMarginSide}>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GroupTopListItem;