// ? we import our createSlice
import { PayloadAction, createSlice } from "@reduxjs/toolkit"


// ? How we work with ts, we create our interface for our initialState
export interface CounterState {
  value:number;
  name: string;
}

// ? Now, we create our initial state
const initialState: CounterState = {
  value: 0,
  name: 'Andre'
};

// ? We create our logic in createSlice
export const counterSlice = createSlice({
  
  name: 'counter', // * -> Name of my variable
  initialState,
  reducers: { 
    // ? We create a function called increment
    increment: (state)=>{
      /*
        Redux Toolkit nos permite escribir lógica "mutante" en reductores. Artículo
        en realidad no muta el estado porque usa la biblioteca Immer,
        que detecta cambios en un "estado borrador" y produce un nuevo
        estado inmutable basado en esos cambios
      */
      state.value += 1;
    },
    incrementByAmount:(state,action: PayloadAction<number>)=>{
      
      state.value += action.payload;
    }
  } 

});

// Action creators are generated for each case reducer function
export const { increment,incrementByAmount } = counterSlice.actions;

