import { Link } from 'react-router-dom';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoCartOutline, IoCheckbox, IoInformation, IoShirt } from 'react-icons/io5';


import { motion } from "framer-motion"

import businessman from "../../../public/businessman.svg";
import analitycs from "../../../public/analitys.svg";


export const DashboardPage = () => {

  return (
    <div className="w-full p-3 sm:px-4 py-[70px] sm:py-16">

      <section className="grid sm:grid-cols-1 lg:grid-cols-5 md:grid-cols-3  gap-5">

        <motion.div
          className=" bg-green-100 shadow-md border border-gray-100  rounded-[12px] p-8  col-span-4 grid grid-cols-2 justify-items-center cursor-pointer"
          whileHover={{ scale: 1.01 }}
          transition={{ ease: 'easeInOut' }}
        >

          <div className='col-span-1 flex flex-col items-start gap-5'>
            <h1 className='text-4xl text-green-700 font-bold'>Welcome Back 🖐️</h1>
            <p className='text-green-700'>
              This is your dashboard, here you will find all details of sales.
              You can manage your expenses, also you can add task and reminders.
              Has a graph circular where you can watch your expenses of form more dynamic
            </p>

            <Link to="/dashboard/expenses" className='bg-green-600 text-white p-2 px-3 rounded font-bold hover:bg-green-700'>Start</Link>
          </div>

          <figure className='w-56 col-span-1 place-self-center'>
            <img src={businessman} alt="businessman" />
          </figure>

        </motion.div>

        <motion.div
          className="shadow-md border border-gray-100  rounded-[12px] col-span-1  flex  items-center cursor-pointer"
          whileHover={{ scale: 1.01 }}
          transition={{ ease: 'easeInOut' }}
        >
          <div className="card">
            <p className="time-text"><span>11:11</span><span className="time-sub-text">PM</span></p>
            <p className="day-text">Wednesday, June 15th</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" strokeWidth="0" fill="currentColor" stroke="currentColor" className="moon"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg>
          </div>
        </motion.div>

        <motion.div
          className=" bg-white border border-gray-100 shadow-md rounded-[12px] p-6 col-span-2 flex justify-around items-center cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ ease: 'easeInOut' }}

        >
          <div className="flex flex-col gap-1 items-center">
            <span className="font-semibold text-xl">Initial Budget</span>
            <div className="font-extrabold text-5xl flex gap-1 text-gray-800">
              <span className="text-green-700">$</span>
              <span>
                10,000
              </span>
            </div>
          </div>

          {/* Grafico */}
          <div className=''>
            <CircularProgressbar
              value={100}
              text={`${100}%`}
              styles={buildStyles({
                pathColor: '#46BB3D',
                textColor: '#8C8C8C',
                textSize: '1.5rem',

              })}
              className='w-[125px] h-[125px] font-semibold'
            />
          </div>

        </motion.div>

        <motion.div
          className=" bg-white border border-gray-100 shadow-md rounded-[12px] p-6 px-14 col-span-2 flex justify-between cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ ease: 'easeInOut' }}
        >

          <div className='bg-gradient-to-tr from-green-500 to-green-300 i p-8 rounded-lg'>
            <IoCartOutline size={60} className='text-white' />
          </div>

          <div className='flex flex-col justify-between items-start'>
            <span className='text-2xl uppercase'>Products</span>
            <div className='text-2xl font-bold text-gray-600 flex gap-3'>
              <IoShirt size={30} className='text-green-500' />
              <span>200</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className=" bg-white shadow-md  border border-gray-100 rounded-[12px] p-6 col-span-1 row-span-2 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ ease: 'easeInOut' }}
        >
          <h3 className='text-3xl text-gray-600 font-semibold text-center'>Pending Tasks </h3>

          <div className='mt-5 flex flex-col gap-4'>
            <div className='flex items-center gap-2 text-xl'>
              <span className='rounded-lg bg-orange-400'>
                <IoInformation size={20} className='text-white' />
              </span>
              <p>Upload products</p>
            </div>

            <div className='flex items-center gap-2 text-xl'>
              <span className='rounded-lg bg-orange-400'>
                <IoInformation size={20} className='text-white' />
              </span>
              <p>Update products</p>
            </div>

            <div className='flex items-center gap-2 text-xl'>
              <span className='rounded-lg bg-orange-400'>
                <IoInformation size={20} className='text-white' />
              </span>
              <p>Buy snaekers</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className=" bg-white shadow-md  border border-gray-100 rounded-[12px] p-6 col-span-4 cursor-pointer flex justify-between"
          whileHover={{ scale: 1.01 }}
          transition={{ ease: 'easeInOut' }}
        >
          
          <div className='mt-4 flex flex-col gap-4'>
            <h4 className='text-2xl font-bold text-gray-500 uppercase'>Ultimate Expenses</h4>
            
            <div className='flex gap-2 items-center'>
              <IoCheckbox size={20} className='text-green-600'/>
              <p className='text-md text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className='flex gap-2 items-center'>
              <IoCheckbox size={20} className='text-green-600'/>
              <p className='text-md text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className='flex gap-2 items-center'>
              <IoCheckbox size={20} className='text-green-600'/>
              <p className='text-md text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className='flex gap-2 items-center'>
              <IoCheckbox size={20} className='text-green-600'/>
              <p className='text-md text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

          </div>

          <figcaption className='w-[500px]'>
            <img src={analitycs} alt="analitycs" />
          </figcaption>              

        </motion.div>

      </section>
    </div>
  )
}



