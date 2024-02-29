import { IoHomeOutline, IoPencilOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { startLogout } from "../../store/slices/auth/thunks";


const links = [
  {
    name: 'Dashboard',
    path: "/",
    icon: <IoHomeOutline/>
  },
  {
    name: 'Tasks',
    path: "/tasks",
    icon: <IoPencilOutline/>
  },
  
]


export const Sidebar = () => {
  
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const onLogout = ()=>{

    dispatch(startLogout());

  };
  
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>

        <div className="mt-8 text-center">
          <img src="/public/imgs/portada.jpg" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Rodrigo André</h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8 flex flex-col">
          {
            links.map(link=>(
              <Link key={link.path} to={link.path}>
                <li  className="bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-4 p-3 text-xl font-bold">
                  {link.icon}
                  {link.name}
                </li>
              </Link>
            ))
          }
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button 
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          onClick={onLogout}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  )
};
