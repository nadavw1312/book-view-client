import React from "react";
import { createContext, useState } from "react";

export const homeContext = createContext({
  refresher: 0,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  setRefresher: (_value: any) => {},
});

export const HomeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [refresher, setRefresher] = useState(0);

  return (
    <homeContext.Provider value={{ refresher, setRefresher }}>
      {children}
    </homeContext.Provider>
  );
};
