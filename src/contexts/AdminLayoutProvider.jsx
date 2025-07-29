import { useState } from "react";
import AdminLayoutContext from "./AdminLayoutContext";

export default function AdminLayoutProvider({ children }) {
  const [layoutData, setLayoutData] = useState({})

    const value = {
        layoutData, 
        setLayoutData
    }

  return (
        <AdminLayoutContext.Provider value={{...value}}>
            {children}
        </AdminLayoutContext.Provider>
  );
}