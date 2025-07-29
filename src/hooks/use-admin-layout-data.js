import { useContext } from "react";
import AdminLayoutContext from "../contexts/AdminLayoutContext";

export default function useAdminLayoutData(){
    
    const ctx = useContext(AdminLayoutContext);

    return {...ctx};
}