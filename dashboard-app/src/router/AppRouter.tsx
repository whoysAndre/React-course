import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { DashboardRouter } from "../dashboard"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/slices"

export const AppRouter = () => {
  
  const {status}:any = useSelector<RootState>(state=>state.auth);

  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{

    onAuthStateChanged(FirebaseAuth,async(user)=>{

      //  Hacemos la validación

      if(!user) return dispatch(logout(''));

      //Creamos nuestra constante para saber saber quien esta autenticado
      const { uid,email,displayName } = user;

      dispatch(login({uid,email,displayName}));
    });


  },[]);

  
  return (
    <>

      <Routes>

        {
          (status === 'authenticated')
          ? <Route path="/*" element = {<DashboardRouter/>} />
          : <Route path="/auth/*" element={<AuthRouter/>}/>
        }

        {/* Routes Login */}
        

        {/* Routes Dashboard */}

      </Routes>

    </>
  )
}
