import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoLogoGoogle } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate} from "react-router-dom"
import { AppDispatch, RootState } from "../../store/store";
import {  startGoogleSignin, startLoginWhithEmailPassword } from "../../store/slices/auth/thunks";

type Inputs = {
  email: string;
  password: string;
}

export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const {status}:any = useSelector<RootState>(state=>state.auth);

  const isLoading = useMemo(()=> status ==='checking',[status]);

  const dispatch = useDispatch<AppDispatch>();


  const onSubmit: SubmitHandler<Inputs> = (data) => {

    dispatch(startLoginWhithEmailPassword(data));

  };

  const onGoogleSignin = () => {
    dispatch(startGoogleSignin());
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* <!-- Auth Card Container --> */}
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">

        {/* <!-- Auth Card --> */}
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

          {/* <!-- Card Title --> */}
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Login
          </h2>

          {
            isLoading
              ? <p className="text-center uppercase text-2xl font-bold mt-5">esperando</p>
              : (
                <>
                  <form
                    className="mt-10 "
                    onSubmit={handleSubmit(onSubmit)}

                  >
                    {/* <!-- Email Input --> */}
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                    <input id="email" type="email" placeholder="e-mail address" autoComplete="email"
                      className="block w-full py-3 px-1 mt-2 
                      text-gray-800 appearance-none 
                      border-b-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200 mb-5"
                      {...register("email", { required: { value: true, message: 'Email is Required' } })}

                    />
                    {
                      errors.email && (
                        <span className="text-center text-red-700 font-bold ">{errors.email.message}</span>
                      )
                    }



                    {/* <!-- Password Input --> */}
                    <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                    <input id="password" type="password" placeholder="password" autoComplete="current-password"
                      className="block w-full py-3 px-1 mt-2 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                      {...register("password", { required: { value: true, message: 'Password is required' } })}
                    />
                    {
                      errors.password && (
                        <span className="text-center text-red-700 font-bold ">{errors.password.message}</span>
                      )
                    }

                    {/* <!-- Auth Buttton --> */}
                    <button type="submit"
                      className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-gray-700 hover:shadow-none">
                      Login
                    </button>

                    {/* <!-- Another Auth Routes --> */}
                    <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center justify-between items-center">
                      <Link to="/auth/register" className="flex-2 underline">
                        Create an Account
                      </Link>
                      <button
                        className="flex-2 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white uppercase p-3 rounded-md"
                        onClick={onGoogleSignin}
                        type="submit"
                      >
                        <IoLogoGoogle />
                        <span>Google</span>
                      </button>
                    </div>
                  </form>
                
                </>
              )
          }
        </div>
      </div>
    </div>
  )
}
