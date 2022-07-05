import { Box, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserDetail } from "../../../models/states/UserDetail";
import { UiParametersContext } from "../../../models/utils/UiParametersContext";
import TextInput, { TextInputProps } from "../../atoms/inputs/TextInput";
import MyAccountInputListItem, { MyAccountInputListItemProps } from "../../atoms/list_item/MyAccountInputListItem";

export type MyAccountProfileFormProps = {
    width: number,
    height: number,
    userDetail: UserDetail
}

const MyAccountProfileForm = ({ props }: { props: MyAccountProfileFormProps }) => {
    const { width, height, userDetail } = props;
    const [ name, setName ] = useState(userDetail.Name);
    const [ email, setEmail ] = useState(userDetail.Email);

    const { FontSize } = useContext(UiParametersContext);

    const inputWidth = width * 0.7;
    const titleWidth = width - inputWidth;
    const listItemHeight = 80;
    const inputMarginSide = 4;
    const fontSize = FontSize.larger;
    const nameInputProps: TextInputProps = {
        key: "Name",
        width: inputWidth - inputMarginSide * 8 * 2,
        height: 40, fontSize,
        value: name, setValue: setName
    };
    const emailInputProps: TextInputProps = {
        ...nameInputProps,
        key: "Email",
        value: email, setValue: setEmail,
    }
    const titles: Array<FormItem> = [
        { title: "Name",  Component: <TextInput props={nameInputProps} /> },
        { title: "Email", Component: <TextInput props={emailInputProps} /> }
    ];
    const marginTopBottom = 4;
    const formHeight = height - 2 * marginTopBottom * 8;

    useEffect(() => {
        setName(userDetail.Name);
        setEmail(userDetail.Email);
    }, [userDetail]);

    return (
        <Box width={width} height={formHeight} marginTop={marginTopBottom}>
            <Grid container>
                {titles.map((x) => {
                    const listItemProps: MyAccountInputListItemProps = {
                        width, height: listItemHeight,
                        titleWidth: titleWidth,
                        title: x.title, fontSize
                    }
                    return (
                        <Grid item>
                            <MyAccountInputListItem props={listItemProps}>
                                {x.Component}
                            </MyAccountInputListItem>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default MyAccountProfileForm;


type FormItem = {
    title: string,
    Component: React.ReactNode
}


export type SimpleLabelProps = {

}

const SimpleLabel = ({ props }: { props: SimpleLabelProps }) => {
    return (
        <Typography>
            {}
        </Typography>
    );
}