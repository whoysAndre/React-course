import { createSlice } from '@reduxjs/toolkit'


interface State{
  status: Status;
  uuid: null;
  email: null;
  displayName: null;
  errorMessage:null;
  photoURL: null;
}

/* 
  TODO:
  Aquí va cambiar de estado cuando nos autentiquemos si estamos autorizados
  cheking: Para lanzar un loader mientras verifica los datos
  not-authenticated: Cuando no verifica el usuario
  authenticated: Cuando hace match con la base de datos
*/
export type Status = 'checking' | 'not-authenticated' | 'authenticated';


const initialState:State = {
  status: 'not-authenticated', // ? El estado en que nos encontramos
  uuid: null,
  email: null,
  displayName: null,
  errorMessage:null,
  photoURL: null,
  
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action)=>{
      const { uid,displayName,photoURL,email  } = action.payload;
      state.status =  'authenticated', // ? El estado en que nos encontramos
      state.uuid = uid;
      state.email =  email;
      state.displayName =  displayName;
      state.photoURL =  photoURL;
    },
    logout: (state,action)=>{
      state.status =  'not-authenticated', // ? El estado en que nos encontramos
      state.uuid = null;
      state.email =  null;
      state.displayName =  null;
      state.errorMessage = null;
      state.photoURL =  null;
      state.errorMessage = action.payload;
    },
    checkingCredential: (state):void=>{
      state.status = 'checking';
    }
  }
});

export const {login,logout,checkingCredential} = authSlice.actions

