import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import TopBarButton, { TopBarButtonProps } from "./TopBarButton";

export type TopBarLinkButtonProps = {
    text: string,
    height: number,
    width: number,
    icon: React.ReactNode,
    path: String,
}
const TopBarLinkButton = ({ props }: { props: TopBarLinkButtonProps}) => {
    const { width, height, path } = props;
    const buttonProps: TopBarButtonProps = {
        ...props,
        alertCount: 0,
        onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => {}
    }
    return (
        <Box sx={{ width, height }}>
            <Link to={{ pathname: "/" + path }} style={{ textDecoration: "none" }}>
                <TopBarButton props={buttonProps} />
            </Link>
        </Box>
    );
}

export default TopBarLinkButton;