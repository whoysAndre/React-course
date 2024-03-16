import { Link, useLocation, useNavigate } from "react-router-dom";
import myImgProfile from "../../../../public/portada.jpg";
import { IoAnalyticsOutline, IoCashOutline, IoGridOutline, IoListOutline, IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { onLogout } from "../../../store/slices";
export const Sidebar = () => {



  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const logout = ()=>{
    dispatch(onLogout(''));
    navigate('/');
  };

  return (
    <>

      <aside className="hidden lg:block sticky top-0 w-[300px] h-screen bg-white shadow-xl p-7">

        {/* Info */}

        <h1 className="text-3xl text-center w-full mt-8">MyDash</h1>

        <div className="flex flex-col items-center mt-10">

          <figure className="w-[90px] h-[90px]">
            <img src={myImgProfile} alt="" className="w-full h-full rounded-full object-cover" />
          </figure>

          <div className="flex flex-col items-center mt-5">
            <h3 className="font-bold text-xl text-gray-800">Rodrigo André</h3>
            <span className="text-gray-500">Admin</span>
          </div>


          <div className="mt-16 w-full flex flex-col gap-5">

            <Link
              to="/dashboard"
              className={`${pathname === '/dashboard' ? 'bg-green-100 active' : ''} flex relative items-center hover:bg-green-100 rounded p-2 gap-4 text-[1.3rem] pl-7 sm:pl-10`}
            >
              <IoGridOutline size={20} />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/dashboard/expenses"
              className={`${pathname === '/dashboard/expenses' ? 'bg-green-100 active' : ''} flex relative items-center hover:bg-green-100 rounded p-2 gap-4 text-[1.3rem] pl-7 sm:pl-10`}
            >
              <IoCashOutline size={20} />
              <span>Expenses</span>
            </Link>

            <Link 
              to="/dashboard/analitycs" 
              className={`${pathname ==='/dashboard/analitycs' ? 'bg-green-100 active' : ''} flex relative items-center hover:bg-green-100 rounded p-2 gap-4 text-[1.3rem] pl-7 sm:pl-10`}
            >
              <IoAnalyticsOutline size={20} />
              <span>Analitycs</span>
            </Link>
            <Link 
              to="/dashboard/sales-list" 
              className={`${pathname ==='/dashboard/sales-list' ? 'bg-green-100 active' : ''} flex relative items-center hover:bg-green-100 rounded p-2 gap-4 text-[1.3rem] pl-7 sm:pl-10`}
            >
              <IoListOutline size={20} />
              <span>Sales list</span>
            </Link>

          </div>


          <div className="w-full h-[2px] bg-gray-200 rounded-lg mt-20 md:mt-52" />

          <button 
            className="mt-5 flex gap-2 hover:bg-gray-300 rounded p-2 w-full pl-10"
            onClick={logout}
          >

            <IoLogOutOutline size={30} />
            <span className="text-lg ">Logout</span>

          </button>

        </div>

      </aside>

    </>
  )
}
