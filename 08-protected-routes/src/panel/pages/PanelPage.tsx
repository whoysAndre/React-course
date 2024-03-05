import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { logout } from "../../store/slices";

export const PanelPage = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const {name} = useSelector((state:RootState)=>state.userAuth);

  const onLogout = ()=>{

    dispatch(logout());

  };
  return (
    <div>
      <h1>Welcome to  {name}</h1>
      <button className="button" onClick={onLogout}>Logout</button>
    </div>
  )
}
