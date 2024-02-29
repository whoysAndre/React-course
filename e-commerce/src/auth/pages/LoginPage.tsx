import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "..";

export const LoginPage = () => {

  const { login }:any = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    
    login('Rodrigo');
    
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">

      <h3 className="text-5xl font-bold">Inicia Sesión</h3>

      <button
        className="mt-5 text-white bg-blue-600 px-7 py-3 rounded font-semibold"
        onClick={onLogin}
      >
      Login
    </button>

    </div >
  )
}
