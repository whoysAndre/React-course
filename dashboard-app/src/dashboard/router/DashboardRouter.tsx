import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages"
import { Sidebar } from "../../ui"

export const DashboardRouter = () => {
  return (
    <>

      <Sidebar/>
      
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
      </Routes>
    </>
  )
}
