import { Box, Grid } from "@mui/material";
import { Group } from "../../../models/states/Group";
import SideGroupListItem, { SideGroupListItemProps } from "../../atoms/buttons/SideGroupListItem";

export type SideGroupListSectionProps = {
    width: number,
    height: number,
    searchString: string,
    groups: Array<Group>
}

const SideGroupListSection = ({ props }: { props: SideGroupListSectionProps }) => {
    const { width, height, groups } = props;
    const marginTopBottom = 2;
    const marginSide = 3;
    const contentHeight = height - 2 * marginTopBottom * 8;
    const contentWidth = width - 2 * marginSide * 8;
    const itemHeight = contentHeight / 10;
    return (
        <Box width={width} height={contentHeight} marginLeft={marginSide} marginTop={marginTopBottom}>
            <Grid container width={contentWidth} height={itemHeight * groups.length}>
                {groups.map((x, i) => {
                    const itemProps: SideGroupListItemProps = {
                        group: x,
                        height: itemHeight,
                        width: contentWidth,
                    };
                    return (
                        <Grid item width={contentWidth} height={itemHeight} key={"sideGroupListItem" + i.toString()}>
                            <SideGroupListItem props={itemProps} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>

    );
}

export default SideGroupListSection;