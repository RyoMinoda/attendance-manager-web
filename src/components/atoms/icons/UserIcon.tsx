import { Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { getPaletteColor } from "../../../models/utils/PaletteSelection";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type UserIconProps = {
    width: number,
    height: number,
    picture: string | null;
    color: string,
}

const UserIcon = ({ props }: { props: UserIconProps }) => {
    const { width, height, color } = props;
    const marginSide = 2;
    const marginTopBottom = 2;
    const iconWidth = width - 2 * marginSide * 8;
    const iconHeight = height - 2 * marginTopBottom * 8;
    const { Palette } = useContext(UiParametersContext);
    return (
        <Box 
            width={iconWidth} 
            height={iconHeight} 
            sx={{ background: Palette.background.component, borderRadius: 1 }}>
            <PersonIcon sx={{ width: iconWidth, height: iconHeight, color }} />
        </Box>
    );
}

export default UserIcon;