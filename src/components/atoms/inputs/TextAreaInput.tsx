import { TextField } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";

export type TextAreaInputProps = {
    key: string,
    width: number,
    height: number,
    fontSize: number,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const TextAreaInput = ({ props }: { props: TextAreaInputProps }) => {
    const { width, height, value, setValue, key, fontSize } = props;
    const { Palette } = useContext(UiParametersContext);
    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        setValue(e.target.value);
    }
    return <TextField 
        id={"default_input_area_" + key} 
        variant="standard"
        value={value}
        onChange={onChangeHandler}
        autoComplete="off"
        multiline={true}
        InputProps={{ style: { fontSize  } }}
        sx={{ width, height, color: Palette.text.primary }}  />
}

export default TextAreaInput;