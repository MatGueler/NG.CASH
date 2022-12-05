import { createContext, useState } from "react";

const UserContext = createContext<AppContextInterface | null>(null);
export default UserContext;

interface AppContextInterface {
  user: any;
  setUser: any;
}

export function UserProvider({ children }: any) {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
