import { Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard";
import { LoginPage } from "../auth";
import { useAuthStore } from "../hooks";
import { PrivateRoutes } from "./PrivateRoutes";



export const AppRoutes = () => {



  return (
    <>

      <Routes>

        <Route index element={<LoginPage />} />


        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route path="/dashboard/*" element={

          <PrivateRoutes>
            <DashboardRoutes />
          </PrivateRoutes>

        }/>




      </Routes>

    </>
  )
};
