
import { ReactNode } from "react";
import { MenuMobile, Sidebar, SidebarMobile } from "../components";




type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {


  return (
    <div className="w-full h-full flex relative">


      <div>
        <MenuMobile />
        <Sidebar/>
        <SidebarMobile />
      </div>



      <div className="w-full h-full">
        {children}      
      </div>

    </div>
  )
};
