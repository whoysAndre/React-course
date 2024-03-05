import { createSlice } from '@reduxjs/toolkit'

interface State{

  status: Status;
  username: string;
  name: string;


};

type Status = 'authorized' | 'not-authorized' ;

const initialState:State = {
  status: 'not-authorized',
  username: '',
  name: ''
};

export const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {

    login: (state)=>{
      state.status = 'authorized';
      state.username = 'kidnan';
      state.name = 'Rodrigo';
    },
    logout: (state)=>{
      state.status = 'not-authorized'
      state.name = '';
      state.username = '';
    }

  }
});

export const {login,logout} = userSlices.actions;

