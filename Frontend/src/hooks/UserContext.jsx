import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userType, setUserType] = useState(localStorage.getItem("user_type"));

  useEffect(() => {
    const storedType = localStorage.getItem("user_Type");
    if (storedType) {
      setUserType(storedType);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
}
