import { Box, Grid, Typography } from "@mui/material";
import NewItemCreationButton, { NewItemCreationButtonProps } from "../../atoms/buttons/NewItemCreationButton";
import GroupSearchInput, { SimpleSearchInputProps } from "../../atoms/inputs/SimpleSearchInput";

export type SideGroupOperationSectionProps = {
    height: number,
    width: number,
    setSearchString: React.Dispatch<React.SetStateAction<string>>,
    searchString: string,
}

const SideGroupOperationSection = ({ props }: { props: SideGroupOperationSectionProps }) => {
    const { width, height, searchString, setSearchString } = props;
    const marginTop = 1.2;
    const marginSide = 3.0;
    const innerHeight = height - 8 * marginTop;
    const innerWidth = width - 8 * marginSide * 2;
    const textWidth = innerWidth * 0.4;
    const creationRightPadding = 1;
    const creationLeftPadding = 4;
    const creationButtionWidth = innerWidth - textWidth - (creationRightPadding + creationLeftPadding) * 8;
    const creationHeight = innerHeight * 0.35;
    const searchHeight = innerHeight - creationHeight;
    const buttonTopMargin = 1.2;
    const creationButtonHeight = creationHeight - 8 * buttonTopMargin;
    const creationButtonProps: NewItemCreationButtonProps = {
        height: creationButtonHeight,
        width: creationButtionWidth,
    }
    const searchInputMarginLeft = 0;
    const searchInputWidth = innerWidth - 2 * searchInputMarginLeft * 8;
    const searchProps: SimpleSearchInputProps = {
        width: searchInputWidth,
        searchString, setSearchString,
    }
    return (
        <Box height={innerHeight} width={innerWidth} marginTop={marginTop} marginLeft={marginSide}>
            <Grid container width={innerWidth} height={innerHeight}>
                <Grid item width={innerWidth} height={creationHeight}>
                    <Grid container width={innerWidth}>
                        <Grid item display="flex" justifyContent="center" alignItems="end" width={textWidth} height={creationHeight}>
                            <Typography>
                                Groups
                            </Typography>
                        </Grid>
                        <Grid item display="flex" justifyContent="center" alignItems="center" width={creationButtionWidth} height={creationHeight}>
                            <Box height={creationButtonHeight} marginTop={buttonTopMargin} marginLeft={creationLeftPadding}>
                                <NewItemCreationButton props={creationButtonProps} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item width={searchInputWidth} height={searchHeight} paddingLeft={searchInputMarginLeft} paddingTop={2}>
                    <GroupSearchInput props={searchProps} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default SideGroupOperationSection;