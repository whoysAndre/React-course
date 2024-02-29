import { Dispatch } from "@reduxjs/toolkit";
import { checkingCredential,login,logout } from "..";
import { loginWithEmailPassword, logoutFirebase, registerUserWhithEmailPassword, sigInWithGoogle } from "../../../firebase/providers";



export const checkingAuthentication = ()=>{

  return async(dispatch:Dispatch)=>{

    dispatch(checkingCredential());

  };

  
};

export const startGoogleSignin = ()=>{

  return async(dispatch:Dispatch)=>{

    dispatch(checkingCredential());

    const result = await sigInWithGoogle();
    
    // Si no esta authenticado entonces hacemos el logout
    if(!result.ok) dispatch(logout('Error'));

    //Si esta todo okey
    dispatch(login(result));


  };

  
};


export const startCreatedUserWhithEmailPassword = ({email,password,displayName}:any)=>{

  return async(dispatch:Dispatch)=>{

    
    //Para colocar nuestro estado de carga
    dispatch(checkingCredential());

    const resp = await registerUserWhithEmailPassword({email,password,displayName});

    if(!resp?.ok) return dispatch(logout('Error'));
    
    //Si todo sale bien logeamos al usuario
    dispatch(login({
      uid: resp.uid,
      displayName: resp.displayName,
      photoURL: resp.photoURL
    }));


  }

};


export const startLoginWhithEmailPassword = (data:any)=>{

  const { email,password } =data;

  return async(dispatch:Dispatch)=>{

    dispatch(checkingCredential());

    const resp = await loginWithEmailPassword({email,password});

    

    if(!resp?.ok) return dispatch(logout('Error'));

    dispatch(login(
      {
        uid: resp.uid,
        displayName: resp.displayName
      }
    ));

  }

};


export const startLogout = ()=>{
  return async(dispatch:Dispatch)=>{

    await logoutFirebase();

    dispatch(logout('Cerrado sesion'));

  };
}