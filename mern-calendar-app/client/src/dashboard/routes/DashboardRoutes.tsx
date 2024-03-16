import { Route, Routes } from "react-router-dom"
import { DashboardPage, ExpensePage, Layout } from ".."


export const DashboardRoutes = () => {
  return (
    <>

      <Layout>
        <Routes>
          <Route path="/" element = {<DashboardPage/>}/>
          <Route path="/expenses" element = {<ExpensePage/>}/>
        </Routes>
      </Layout>
    
    </>
  )
}
