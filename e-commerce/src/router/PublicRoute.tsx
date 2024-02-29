import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}:any) => {
  
  const { state }:any = useContext(AuthContext);
  
  return (!!state.logged) //Si no esta logeado
    ? children
    : <Navigate to="/login"/>
};