import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";

export type AuthPasswordInputProps = {
    width: number,
    height: number,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    fontSize: number
}

const AuthPasswordInput = ({ props }: { props: AuthPasswordInputProps }) => {
    const [ showPassword, setShowPassword ] = useState(false);
    const { password, setPassword, width, fontSize, height } = props;
    const handleClickShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowPassword(!showPassword);
    }
    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    return (
    <FormControl sx={{ width, height, fontSize }} variant="outlined" margin="dense">
        <OutlinedInput
            id="password-input"
            type={ showPassword ? 'text' : 'password' }
            value={password}
            onChange={(e) => {
                setPassword(e.currentTarget.value);
            }}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
            }
        />
    </FormControl>
  );
}

export default AuthPasswordInput;