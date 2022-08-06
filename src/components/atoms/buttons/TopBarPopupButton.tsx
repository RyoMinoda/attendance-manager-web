import { Box } from "@mui/material";
import TopBarButton, { TopBarButtonProps } from "./TopBarButton";

export type TopBarPopupButtonProps = {
    text: string,
    height: number,
    width: number,
    icon: React.ReactNode,
    onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TopBarPopupButton = ({ props }: { props: TopBarPopupButtonProps }) => {
    const { width, height, onClickHandler } = props;
    const buttonProps: TopBarButtonProps = {
        ...props,
        alertCount: 5,
        onClickHandler
    }
    return (
        <Box sx={{ width, height }}>
            <TopBarButton props={buttonProps} />
        </Box>
    );
}

export default TopBarPopupButton;