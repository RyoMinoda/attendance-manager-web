import { Box, Grid } from "@mui/material";
import { Group } from "../../../models/states/Group";
import { Member } from "../../../models/states/Member";

export type GroupMainContentProps = {
    width: number,
    height: number,
    groups: Array<Group>,
    members: Array<Member>
}

const GroupMainContent = ({ props }: { props: GroupMainContentProps }) => {
    const { width, height, groups, members } = props;
    return (
        <Box width={width} height={height}>
            <Grid container>
                <Grid item>
                    
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </Box>
    );
}

export default GroupMainContent;