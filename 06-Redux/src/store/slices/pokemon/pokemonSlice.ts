import { createSlice } from '@reduxjs/toolkit'
import { newThunks } from '.';


export interface State {
  page: number;
  pokemons: [];
  isLoading: boolean;
  namePokemon: string;
}

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
  namePokemon: ''
};
export const pokemonSlice = createSlice({
  name: 'name',
  initialState: initialState,
  reducers: {
    startLoadingPokemons: (state, /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state,action)=>{

      console.log(action.payload);
    },
    pokemonName: (state,action)=>{
      
    }

  },
  extraReducers:(builder)=>{
    builder.addCase(newThunks.fulfilled,(state,action)=>{

    });
  }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons,setPokemons } = pokemonSlice.actions;