import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}:any) => {
  
  const { state }:any = useContext(AuthContext);
  
  return (state.logged)
    ? children
    : <Navigate to="/login"/>
}
