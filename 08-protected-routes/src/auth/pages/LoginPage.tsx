import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { login } from "../../store/slices";


export const LoginPage = () => {
  
  const navigate = useNavigate();
  
  const dispatch = useDispatch<AppDispatch>();

  const onLogin = ()=>{

    dispatch(login());
    navigate('/home');
  };
  
  return (
    <>
      <h3>Login</h3>
      <button className="button" onClick={onLogin}>Login</button>
    </>
  )
};
