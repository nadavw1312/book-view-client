import { createContext, useEffect, useState } from "react";

type BreakPointContextType = {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  "2xl": boolean;
  width: number;
};
const initialState = {
  sm: false,
  md: false,
  lg: false,
  xl: false,
  "2xl": false,
  width: 0,
};

export const BreakPointContext =
  createContext<BreakPointContextType>(initialState);

export const BreakPointProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [width, setWidth] = useState(0);
  const [breakPoint, setBreakPoint] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
    width: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const curr = { ...initialState };
    if (width <= 640) {
      curr.sm = true;
    }
    if (width >= 640 && width < 1024) {
      curr.md = true;
    }
    if (width >= 1024 && width < 1280) {
      curr.lg = true;
    }
    if (width >= 1280 && width < 1536) {
      curr.xl = true;
    }
    if (width >= 1536) {
      curr["2xl"] = true;
    }
    curr.width = width;
    setBreakPoint(curr);
  }, [width]);

  return (
    <BreakPointContext.Provider value={breakPoint}>
      {children}
    </BreakPointContext.Provider>
  );
};
