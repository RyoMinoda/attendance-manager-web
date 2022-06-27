import { Box } from "@mui/material";
import { useEffect, useCallback, useState } from "react";
import { DashboardScheduleContentsProps } from "./DashboardScheduleContents";

const DashboardScheduleScroller = ({ props } : { props: DashboardScheduleContentsProps }) => {
    const { width, height, setScrollTop, hourHeight, hours } = props;
    const [ listenerAdded, setListenerAdded ] = useState(false);
    const elementId = "dashboard_schedule";


    const setScrollPosition = useCallback(() => {
        const element = document.getElementById(elementId);
        const top = element?.scrollTop;
        if (top !== undefined) {
            setScrollTop(top);
        }
    }, [setScrollTop]);

    useEffect(() => {
        const element = document.getElementById(elementId);
        if (element != null && listenerAdded === false) {
            const currentHour = new Date();
            const hourTop = currentHour.getHours() * hourHeight;
            setScrollTop(hourTop);
            element.addEventListener('scroll', setScrollPosition, { passive: true });
            setListenerAdded(false);
        }
        return () => {
            setListenerAdded(true);
            document.removeEventListener('scroll', setScrollPosition);
        }

    }, [listenerAdded, hourHeight, setScrollPosition, setScrollTop]);

    return (
        <Box id={elementId} 
             width={width} 
             height={height}
             sx={{ overflowY: 'scroll', overflowX: 'hidden', scrollbarWidth: 'none', position: "absolute", zIndex: 100 }}>
            <Box sx={{ width, height: hourHeight * hours }}></Box>
        </Box>
    );
}

export default DashboardScheduleScroller;