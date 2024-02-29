import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { ShopRoutes } from "../shop"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="login/*" element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element = {<LoginPage/>}/>
            </Routes>
          </PublicRoute>
        } />
        
        <Route path="/*" element={
          <PrivateRoute>
            <ShopRoutes />
          </PrivateRoute>
        } />

      </Routes>
    </>
  )
}
