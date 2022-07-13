import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserDetail } from "../../../models/states/UserDetail";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import { DateFormatUnion, formatDate } from "../../../utils/DateExtensions";
import DateInput, { DateInputProps } from "../../atoms/inputs/DateInput";
import TextAreaInput, { TextAreaInputProps } from "../../atoms/inputs/TextAreaInput";
import TextInput, { TextInputProps } from "../../atoms/inputs/TextInput";
import MyAccountInputListItem, { MyAccountInputListItemProps } from "../../atoms/list_item/MyAccountInputListItem";
import IconSwitchButton, { IconSwitchButtonProps } from "../../atoms/buttons/IconSwitchButton";
import EditIcon from '@mui/icons-material/Edit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import MyAccountFormLabel, { MyAccountFormLabelProps } from "../../atoms/label/MyAccountFormLabel";

export type MyAccountProfileFormProps = {
    width: number,
    height: number,
    userDetail: UserDetail
}

const MyAccountProfileForm = ({ props }: { props: MyAccountProfileFormProps }) => {
    const { width, height, userDetail } = props;
    const [ name, setName ] = useState(userDetail.Name);
    const [ email, setEmail ] = useState(userDetail.Email);
    const [ birth, setBirth ] = useState(userDetail.Birth);
    const [ phone, setPhone ] = useState(userDetail.Phone);
    const [ note, setNote ] = useState(userDetail.Note);
    const [ isEditMode, setIsEditMode ] = useState(false);
    const { FontSize, Palette, Layout } = useContext(UiParametersContext);

    const inputWidth = width * 0.75;
    const titleWidth = width - inputWidth;
    const listItemHeight = 75;
    const inputMarginSide = 4;
    const fontSize = FontSize.larger;
    const nameInputProps: TextInputProps = {
        key: "Name",
        width: inputWidth - inputMarginSide * 8 * 2,
        height: 40, fontSize,
        value: name, setValue: setName
    };
    const emailInputProps: TextInputProps = {
        ...nameInputProps, key: "Email", value: email, setValue: setEmail,
    }
    const phoneInputProps: TextInputProps = {
        ...nameInputProps, key: "Phone", value: phone, setValue: setPhone,
    }
    const birthInputProps: DateInputProps = {
        ...nameInputProps,
        value: birth, setValue: setBirth, format: DateFormatUnion.English1Digit
    }
    const noteInputProps: TextAreaInputProps = {
        key: "Memo", width: nameInputProps.width,
        height: 75, fontSize,
        value: note, setValue: setNote
    }
    
    const titles: Array<FormItem> = [
        { title: "Name",  Component: <TextInput props={nameInputProps} />, value: name },
        { title: "Email", Component: <TextInput props={emailInputProps} />, value: email },
        { title: "Phone", Component: <TextInput props={phoneInputProps} />, value: phone },
        { title: "Birth", Component: <DateInput props={birthInputProps} />, value: formatDate(birth, DateFormatUnion.English1Digit) },
        { title: "Memo", Component: <TextAreaInput props={noteInputProps} />, value: note }
    ];
    const marginTopBottom = 6;
    const formHeight = height - 2 * marginTopBottom * 8;

    const bottomButtonsAreaHeight = 100;
    const bottomButtonsMarginTop = 10;
    const bottomButtonsMarginSide = width / 8 * 0.28;
    const bottomButtonsCenterMargin = width / 8 * 0.07;
    const bottomButtonsHeight = Layout.DefaultButtonHeight;
    const bottomCellWidth = (width - 2 * bottomButtonsMarginSide * 8 - 2 * bottomButtonsCenterMargin * 8) / 2;
    const cancelButtonProps: IconSwitchButtonProps = {
        width: bottomCellWidth, title: "Cancel",
        height: bottomButtonsHeight,
        value: isEditMode, 
        Icon: RestartAltIcon,
        isActive: isEditMode,
        activeColor: Palette.text.secondary
    } 
    const editButtonProps: IconSwitchButtonProps = {
        ...cancelButtonProps,
        title: "Edit",
        value: true, 
        Icon: EditIcon,
        isActive: true,
        activeColor: Palette.primary.darker,
        onActiveHandler() {
            setIsEditMode(true);
        }
    }
    const saveButtonProps: IconSwitchButtonProps = {
        ...editButtonProps,
        title: "Save",
        Icon: SaveIcon,
        activeColor: Palette.primary.darker,
        onActiveHandler() {
            setIsEditMode(false);
        }
    }

    useEffect(() => {
        setName(userDetail.Name);
        setEmail(userDetail.Email);
        setPhone(userDetail.Phone);
        setBirth(userDetail.Birth);
        setNote(userDetail.Note);
    }, [userDetail]);

    return (
        <Box width={width} height={formHeight} marginTop={marginTopBottom}>
            <Grid container>
                {titles.map((x, i) => {
                    const listItemProps: MyAccountInputListItemProps = {
                        width, height: listItemHeight,
                        titleWidth: titleWidth,
                        title: x.title, fontSize
                    }
                    const labelProps: MyAccountFormLabelProps = {
                        value: x.value, fontSize: FontSize, 
                        fontColor: Palette.text.primary, 
                        width: nameInputProps.width, 
                        height: listItemHeight
                    }
                    return (
                        <Grid item key={"form-input-" + x.title}>
                            <MyAccountInputListItem props={listItemProps}>
                                {isEditMode ? x.Component : <MyAccountFormLabel props={(labelProps)} />}
                            </MyAccountInputListItem>
                        </Grid>
                    );
                })}
                <Grid item>
                    <Box width={width} height={bottomButtonsAreaHeight}>
                        <Grid container marginTop={bottomButtonsMarginTop}>
                            <Grid item marginLeft={bottomButtonsMarginSide} marginRight={bottomButtonsCenterMargin}>
                                <IconSwitchButton props={cancelButtonProps} />
                            </Grid>
                            <Grid item marginLeft={bottomButtonsCenterMargin} marginRight={bottomButtonsMarginSide}>
                                {isEditMode ? <IconSwitchButton props={saveButtonProps} /> : <IconSwitchButton props={editButtonProps} /> } 
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MyAccountProfileForm;


type FormItem = {
    title: string,
    value: string,
    Component: React.ReactNode
}

