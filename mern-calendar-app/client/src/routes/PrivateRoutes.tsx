
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";

export const PrivateRoutes = ({children}:any) => {
  
  const { status,checkoutAuthToken } = useAuthStore();


  useEffect(()=>{
    checkoutAuthToken();
  },[]);
  
  return (status === "authenticated" )

    ? children
    : <Navigate to = "/" />

};
