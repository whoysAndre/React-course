
import { useSelector } from "react-redux"
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";



export const PrivateRoutes = ({children}:any) => {
  
  const { status }  = useSelector((state:RootState)=>state.userAuth);


  
  return (status==='authorized')
    ? children
    : <Navigate to="/"/>
      
}
