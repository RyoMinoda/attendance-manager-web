import { Input, TextField } from "@mui/material";

export type AuthIdInputProps = {
    width: number,
    height: number,
    id: string,
    fontSize: number,
    setId: React.Dispatch<React.SetStateAction<string>>,
}

const AuthIdInput = ({ props }: { props: AuthIdInputProps }) => {
    const { id, setId, width, fontSize, height } = props;
    return <TextField
        id="id-input"
        value={id}
        onChange={(e) => {
            setId(e.currentTarget.value);
        }}
        sx={{ width, fontSize, height }}
        margin="dense"
    />
}

export default AuthIdInput;