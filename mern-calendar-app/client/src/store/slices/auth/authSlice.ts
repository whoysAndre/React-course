import { createSlice } from '@reduxjs/toolkit'

interface User{
  id:string;
  name:string;
  email:string;
}

interface InitialState{
  status: Status;
  user: User | {};
  errorMessage: string;
}

type Status = 'authenticated' | 'not-authenticated' | 'checking';

const initialState:InitialState = {
  status: 'checking',
  user: {},
  errorMessage: ""

};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    onChecking: (state)=>{
      state.status = "checking";
      state.user = {};
      state.errorMessage = "";
    },
    onLogin: (state,{payload})=>{

      const { token, ...restData } = payload;

      state.status = "authenticated";
      state.user = restData;
      state.errorMessage = "";
    },
    onLogout: (state,{payload})=>{
      state.status = "not-authenticated";
      state.user = {};

    },
    clearErrorMessage: (state)=>{
      state.errorMessage = "";
    }



  }
});

export const { onChecking,onLogin,onLogout, clearErrorMessage } = authSlice.actions

