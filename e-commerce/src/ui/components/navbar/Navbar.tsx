import { IoMenuOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { useUIStore } from "../../../store";

export const Navbar = () => {
  
  const openMenu = useUIStore((state)=>state.openSideMenu);
  
  return (
    <>

      <nav className="w-full p-5 px-10 flex justify-between items-center">

        <Link to="/" className="text-xl">shop | homies</Link>

        <div className="sm:flex gap-5  hidden">
          <Link to="/category/men" className="flex justify-center items-center px-2  rounded transition-all bg-gray-200 hover:bg-gray-300">men</Link>
          <Link to="/category/women" className="flex justify-center items-center px-2 rounded transition-all bg-gray-200 hover:bg-gray-300">women</Link>
          <Link to="/category/kid" className="flex justify-center items-center px-2  rounded transition-all bg-gray-200 hover:bg-gray-300">kid</Link>
        </div>

        
        <IoMenuOutline size={30}  onClick={openMenu} className="cursor-pointer bg-gray-200 hover:bg-gray-300 rounded"/>
       

      </nav>

    </>
  )
}
