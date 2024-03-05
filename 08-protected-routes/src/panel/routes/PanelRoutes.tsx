import { Route, Routes } from "react-router-dom"
import { PanelPage } from "../pages/PanelPage"

export const PanelRoutes = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<PanelPage/>}/>
      </Routes>
    
    </>
  )
}
