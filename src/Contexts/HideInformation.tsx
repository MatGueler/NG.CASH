import { createContext, useState } from "react";

const HideInformationContext = createContext<AppContextInterface | null>(null);
export default HideInformationContext;

interface AppContextInterface {
  visibleInfo: boolean;
  setVisibleInfo: any;
}

export function HideInformationProvider({ children }: any) {
  const [visibleInfo, setVisibleInfo] = useState(true);

  return (
    <HideInformationContext.Provider value={{ visibleInfo, setVisibleInfo }}>
      {children}
    </HideInformationContext.Provider>
  );
}
