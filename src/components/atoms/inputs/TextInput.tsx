import { TextField } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { Guid } from "../../../utils/Guid";

export type TextInputProps = {
    key: string,
    width: number,
    height: number,
    fontSize: number,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const TextInput = ({ props }: { props: TextInputProps }) => {
    const { width, height, value, setValue, key, fontSize } = props;
    const { Palette } = useContext(UiParametersContext);
    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        setValue(e.target.value);
    }
    return <TextField 
        id={"default_input_" + key} 
        variant="standard"
        value={value}
        onChange={onChangeHandler}
        autoComplete="off"
        InputProps={{ style: { fontSize  } }}
        sx={{ width, height, color: Palette.text.primary }}  />
}

export default TextInput;