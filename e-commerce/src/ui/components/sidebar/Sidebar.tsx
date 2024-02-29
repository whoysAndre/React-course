import { IoCloseOutline, IoLogOutOutline } from "react-icons/io5"
import { useUIStore } from "../../../store"
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../auth";

export const Sidebar = () => {

  const isSideMenuOpen = useUIStore((state => state.isSideMenuOpen));
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const { state , logout }: any = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = ()=>{

    logout();
    
    navigate('/login',{
      replace: true
    });

  };

  return (
    <div className="">


      {
        isSideMenuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          />
        )
      }

      {
        isSideMenuOpen && (
          <div
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
            onClick={closeMenu}
          />
        )
      }



      <nav className={
        clsx(
          "fixed bg-white w-[250px]  md:w-[500px] h-screen z-20 top-0 right-0 shadow-2xl transform transition-all duration-300 p-5",
          {
            "translate-x-full": !isSideMenuOpen
          }
        )
      }>

        <IoCloseOutline size={30} className="absolute top-5 right-5 cursor-pointer"
          onClick={closeMenu}
        />


        <div className="mt-20">

          <div className="flex items-center w-full  hover:bg-gray-100 rounded p-2"
            onClick={onLogout}
          >
            <IoLogOutOutline size={30} />
            <span className="pl-2">Logout</span>
          </div>
        </div>

      </nav>


    </div>
  )
}
