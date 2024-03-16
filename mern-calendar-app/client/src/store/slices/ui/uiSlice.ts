


import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  isSideMenu: false,

}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {

    openSideMenu: (state)=>{
      state.isSideMenu = true;
    },

    closeSideMenu: (state)=>{
      state.isSideMenu = false;
    }
  }
});

export const { openSideMenu,closeSideMenu } = uiSlice.actions

