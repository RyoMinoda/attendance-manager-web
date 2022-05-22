import { useLayoutEffect, useState } from "react";

export type WindowLayout = {
    width: number;
    height: number;
}

export const defaultWindowLayout: WindowLayout = {
    width: window.innerWidth,
    height: window.innerHeight,
}

export const useWindowSize = (): WindowLayout => {
    const initialSize: WindowLayout = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    const [size, setSize] = useState(initialSize);
    useLayoutEffect(() => {
      const updateSize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
