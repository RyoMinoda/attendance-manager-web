import { Box } from "@mui/material";

export type DashboardAttendanceProps = {
    width: number,
    height: number,
}

const DashboardAttendance = ({ props }: { props: DashboardAttendanceProps }) => {
    const { width, height } = props;
    return (
        <Box sx={{ width, height }}>
            
        </Box>
    );
}

export default DashboardAttendance;