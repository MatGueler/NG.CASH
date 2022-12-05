import { createContext, useState } from "react";

const LoadingContext = createContext<AppContextInterface | null>(null);
export default LoadingContext;

interface AppContextInterface {
  loading: boolean;
  disable: boolean;
  setLoading: any;
  setDisable: any;
}

export function LoadingProvider({ children }: any) {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ loading, setLoading, disable, setDisable }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
