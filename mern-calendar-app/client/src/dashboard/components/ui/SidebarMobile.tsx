import { IoAnalyticsOutline, IoCashOutline, IoChevronBack, IoGridOutline, IoListOutline, IoLogOutOutline } from "react-icons/io5";
import myImgProfile from "../../../../public/portada.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { closeSideMenu } from "../../../store/slices";

import { motion } from "framer-motion";

const variants = {
  hidden: {
    transform: "translateX(-100%)"
  },
  visible: {
    transform: "translateX(0)"
  }
}

export const SidebarMobile = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isSideMenu = useSelector((state: RootState) => state.showMenu);

  return (
    <>

      <motion.aside
        className="fixed z-10 lg:z-0 top-0 lg:relative lg:hidden w-[260px] sm:w-[300px] h-full bg-white shadow-xl p-7"
        variants={variants}
        initial="hidden"
        animate={isSideMenu.isSideMenu ? "visible" : "hidden"}
        transition={{ ease: "linear" }}
      >
        <div className="w-full flex justify-end lg:hidden ">
          <button
            className=""
            onClick={() => dispatch(closeSideMenu())}
          >
            <IoChevronBack size={30} />
          </button>
        </div>

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

            <Link to="/dashboard" className="flex items-center hover:bg-gray-300 rounded p-2 gap-4 text-[1.3rem] pl-7 sm:pl-10">
              <IoGridOutline size={20} />
              <span>Dashboard</span>
            </Link>

            <Link to="/dashboard/expenses" className="flex items-center hover:bg-gray-300 rounded p-2 gap-4 text-[1.3rem] pl-7 sm:pl-10">
              <IoCashOutline size={20} />
              <span>Expenses</span>
            </Link>

            <Link to="/dashboard/analitycs" className="flex items-center hover:bg-gray-300 rounded p-2 gap-4 text-[1.3rem] pl-7 sm:pl-10">
              <IoAnalyticsOutline size={20} />
              <span>Analitycs</span>
            </Link>
            <Link to="/dashboard/sales-list" className="flex items-center hover:bg-gray-300 rounded p-2 gap-4 text-[1.3rem]  pl-7 sm:pl-10">
              <IoListOutline size={20} />
              <span>Sales list</span>
            </Link>

          </div>


          <div className="w-full h-[2px] bg-gray-200 rounded-lg mt-20 md:mt-52" />

          <button className="mt-5 flex gap-2 hover:bg-gray-300 rounded p-2 w-full pl-10">

            <IoLogOutOutline size={30} />
            <span className="text-lg ">Logout</span>

          </button>

        </div>

      </motion.aside>
    </>
  )
};
