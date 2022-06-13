import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useContext } from "react";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { DashboardMembersFilterTypes } from "./enum/DashboardMembersFilterType";
import { SelectorProps } from "./SelectorProps";

const DashboardMembersSelector = ({ props }: { props: SelectorProps<string> }) => {
    const { height, width, marginLeftRight, marginTopBottom, value, setValue } = props;
    const innerHeight = height - marginTopBottom * 8 * 2;
    const innerWidth = width - marginLeftRight * 8 - 2;
    const { FontSize } = useContext(UiParametersContext);
    const changeHandler = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    }
    return (
        <FormControl sx={{ height: innerHeight, width: innerWidth, marginLeft: marginLeftRight, marginTop: marginTopBottom, minHeight: 0 }} size="small">
            <InputLabel id="filter-select-small" sx={{ fontSize: FontSize.normal }}>Filter</InputLabel>
            <Select
                labelId="filter-select-small"
                label="Filter"
                sx={{ minHeight: 0, fontSize: FontSize.smaller }}
                value={value}
                onChange={changeHandler}
            >
                {DashboardMembersFilterTypes.map((x, i) => {
                    return (
                        <MenuItem key={"member_selector_key_" + i.toString()} value={x} sx={{ fontSize: FontSize.normal }}>
                            {x as string}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}

export default DashboardMembersSelector;