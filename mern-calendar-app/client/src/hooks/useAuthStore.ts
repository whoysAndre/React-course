import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { authApi } from "../apis";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/slices";
import { useNavigate } from "react-router-dom";




export const useAuthStore = ()=>{

  const { status, user, errorMessage  } = useSelector((state:RootState)=>state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  //Metodos para inicializar la llamada fecth es asincrona porque hara llamada al backend
  const startLogin = async(data:any)=>{

    dispatch(onChecking());

    try {
      
      const resp = await authApi.post('/auth/login',data);
      //Guardamos el token
      localStorage.setItem('token', resp.data.token);

      //Disparamos nuestra acción login
      dispatch(onLogin(resp.data));

      navigate('/dashboard');

    } catch (error) {
      
      dispatch(onLogout('Incorrect Credentials'));
      setTimeout(() => {

        dispatch(clearErrorMessage());

      }, 10);
    }
  };

  const checkoutAuthToken = ()=>{

    const token = localStorage.getItem('token');

    if(!token) return dispatch(onLogout(''));
  };


  return {
    //Properties
    status, 
    user, 
    errorMessage,

    //Methods
    startLogin,
    checkoutAuthToken
  }


};