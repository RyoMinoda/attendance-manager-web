import { Grid } from "@mui/material";
import SimpleSearchInput, { SimpleSearchInputProps } from "../../atoms/inputs/SimpleSearchInput";

export type GroupTopHeaderProps = {
    height: number,
    width: number,
    searchString: string,
    setSearchString: React.Dispatch<React.SetStateAction<string>>,
}

const GroupTopHeader = ({ props }: { props: GroupTopHeaderProps }) => {
    const { width, height, searchString, setSearchString } = props;
    const halfWidth = width / 2;
    const quarterWidth = width / 4;
    const inputProps: SimpleSearchInputProps = {
        width: halfWidth - 16,
        setSearchString, searchString
    }

    return (
        <Grid container width={width} height={height}>
            <Grid item width={halfWidth} height={height} display="flex" justifyContent="center" alignItems="center">
                <SimpleSearchInput props={inputProps} />
            </Grid>
            <Grid item width={quarterWidth} height={height}>
                
            </Grid>
        </Grid>
    );
}

export default GroupTopHeader;

