import { Route, Routes} from "react-router-dom"
import { PanelRoutes } from "../panel/routes/PanelRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { LoginPage } from "../auth/pages/LoginPage"
import { PrivateRoutes } from "./PrivateRoutes"

export const AppRoutes = () => {
  
  return (
    <>
      
      <Routes>

        <Route index element = {<LoginPage/>}/>

        <Route path="/auth/*" element = {<AuthRoutes/>}/>


        <Route path="/home/*" element = {
          <PrivateRoutes>
            <PanelRoutes/>
          </PrivateRoutes>
        }/>

      </Routes>
    </>
  )
}
