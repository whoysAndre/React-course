
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "../../ui";
import { HomePage } from "../pages/HomePage";
import { CategoryPage } from "../pages/CategoryPage";
import { ProductPage } from "../pages/ProductPage";

export const ShopRoutes = () => {
  
  
  
  return (
    <>

      <Navbar/>
      <Sidebar/>

      <Routes>
        <Route path="/" element = { <HomePage/> } />
        <Route path="/category/:gender" element = {<CategoryPage/>}/>
        <Route path="/product/:slug" element = {<ProductPage/>}/>
      </Routes>
    </>
  )
};
