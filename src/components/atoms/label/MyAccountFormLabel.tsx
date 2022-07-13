import { Box, Typography } from "@mui/material";
import { FontSize } from "../../../models/utils/FontSize";

export type MyAccountFormLabelProps = {
    value: string, 
    fontSize: FontSize,
    fontColor: string,
    width: number,
    height: number,
}

const MyAccountFormLabel = ({ props }: { props: MyAccountFormLabelProps }) => {
    const { value, fontSize, fontColor, width, height } = props;
    return (
        <Box width={width} height={height} textOverflow="ellipsis" display="flex" justifyContent="flex-start" alignItems="center">
            <Typography fontSize={fontSize.larger} paddingBottom={1.2} color={fontColor}>
                {value}
            </Typography>
        </Box>
    );
}

export default MyAccountFormLabel;