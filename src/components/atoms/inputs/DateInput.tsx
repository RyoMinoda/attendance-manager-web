import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { useContext } from 'react';
import { UiParametersContext } from '../../../models/utils/UiParametersContext';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export type DateInputProps = {
    width: number,
    height: number,
    value: Date,
    format: string,
    fontSize: number,
    setValue: React.Dispatch<React.SetStateAction<Date>>
}

const DateInput = ({ props }: { props: DateInputProps }) => {
    const { value, format, fontSize, width, height } = props;
    const { Palette } = useContext(UiParametersContext);
    const handleChange = (value: Date | null) => {
        
    }
    return (
        <LocalizationProvider  dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                inputFormat={format}
                value={value}
                onChange={handleChange}
                renderInput={(params) => 
                    <TextField 
                        variant="standard" 
                        sx={{ width, height, color: Palette.text.primary }}
                        {...params}
                        InputProps={{ style: { fontSize  }, ...params.InputProps }}  />
                }
            />
        </LocalizationProvider>
    );
}

export default DateInput;
