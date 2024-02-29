import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { startCreatedUserWhithEmailPassword } from "../../store/slices/auth/thunks";



type Inputs = {
  displayName: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    
    dispatch(startCreatedUserWhithEmailPassword(data));

  };

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* <!-- Auth Card Container --> */}
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">

          {/* <!-- Auth Card --> */}
          <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

            {/* <!-- Card Title --> */}
            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Create an Account
            </h2>

            <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>

              {/* <!-- Name Input --> */}
              <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase">Name</label>
              <input id="name" type="text" placeholder="Rodrigo" autoComplete="text"
                className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 mb-3"
                {...register("displayName", { required: { value: true, message: 'Email is Required'} })}
              />
              {
                errors.displayName && (
                  <span className="text-center text-red-700 font-bold ">{errors.displayName.message}</span>
                )
              }

              {/* <!-- Email Input --> */}
              <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="e-mail address"
                autoComplete="email"
                className="mb-3 block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100focus:text-gray-500 focus:outline-none focus:border-gray-200"
                {...register("email", { required: { value: true, message: 'Email is Required' } })}
              />

              {
                errors.email && (
                  <span className="text-center text-red-700 font-bold ">{errors.email.message}</span>
                )
              }

              {/* <!-- Password Input --> */}
              <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
              <input
                id="password"
                type="password"
                placeholder="password"
                autoComplete="current-password"
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
                Register
              </button>

              {/* <!-- Another Auth Routes --> */}
              <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <Link to="/auth/login" className="flex-2 underline">
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
};
