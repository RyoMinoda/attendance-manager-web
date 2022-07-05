import { Box, SxProps, Theme, Typography } from "@mui/material";
import EditOffIcon from '@mui/icons-material/EditOff';
import LockIcon from '@mui/icons-material/Lock';
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { getTextColorBySelectionColor } from "../../../models/utils/PaletteSelection";

export type GroupItemIconProps = {
    initial: string,
    size: number,
    isViewable: boolean,
    isEditable: boolean,
    color: string,
}

const GroupItemIcon = ({ props }: { props: GroupItemIconProps }) => {
    const { size, isViewable, color, initial, isEditable } = props;
    const { Palette } = useContext(UiParametersContext);
    const targetColor = getTextColorBySelectionColor(color, Palette);
    const boxStyle: SxProps<Theme> = {
        width: size,
        height: size,
        background: color,
        borderRadius: size,
        color: targetColor,
    }
    const iconMargin = 0.8;
    const iconSize = size - iconMargin * 8 * 2;
    const lockedIcon = (
        <Box width={iconSize} height={iconSize}>
           <LockIcon sx={{ width: iconSize, height: iconSize }} />
        </Box>
    );
    const initialIcon = (
        <Typography>
            {initial}
        </Typography>
    )
    const editableIcon = (
        <Box width={iconSize} height={iconSize}>
            <EditOffIcon sx={{ width: iconSize, height: iconSize }} />
        </Box>
    );
    var icon = lockedIcon;
    if (isViewable) {
        if (!isEditable) {
            icon = editableIcon;
        } else {
            icon = initialIcon;
        }
    }
    return (
        <Box sx={boxStyle} display="flex" justifyContent="center" alignItems="center">
            {icon}
        </Box>
    );
}

export default GroupItemIcon;