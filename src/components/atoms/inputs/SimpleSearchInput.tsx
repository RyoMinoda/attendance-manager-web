import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export type SimpleSearchInputProps = {
    width: number,
    setSearchString: React.Dispatch<React.SetStateAction<string>>,
    searchString: string,
}

const SimpleSearchInput = ({ props }: { props: SimpleSearchInputProps }) => {
    const { width, setSearchString, searchString } = props;
    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        e.preventDefault();
        setSearchString(e.currentTarget.value);
    }
    return (
        <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width }}>
            <IconButton sx={{ p: '10px' }}>
                <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} onChange={onChangeHandler} value={searchString} />
        </Paper>
    );
}

export default SimpleSearchInput;