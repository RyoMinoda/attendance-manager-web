import { useLayoutEffect, useState } from "react";
import { WindowLayoutType } from "./WindowLayoutType";

export type WindowLayout = {
    width: number;
    height: number;
    type: WindowLayoutType;
}

export const defaultWindowLayout: WindowLayout = {
    width: window.innerWidth,
    height: window.innerHeight,
    type: WindowLayoutType.PC,
}

export const useWindowSize = (): WindowLayout => {
    const initialSize: WindowLayout = {
        width: window.innerWidth,
        height: window.innerHeight,
        type: WindowLayoutType.PC
    }
    const [size, setSize] = useState(initialSize);
    useLayoutEffect(() => {
      const updateSize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
            type: window.innerHeight / window.innerWidth > 1.3 ? WindowLayoutType.SP : WindowLayoutType.PC,
        });
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
