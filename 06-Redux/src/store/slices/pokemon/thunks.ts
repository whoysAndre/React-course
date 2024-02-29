
import { Dispatch, createAsyncThunk  } from "@reduxjs/toolkit";
import { setPokemons,  } from ".";
import { pokemonApi } from "../../../api/pokemon-api";




export const getPokemons = (page:number=0)=>{

  return async(dispatch:Dispatch)=>{
    

    //TODO: Realizar petición http

    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

    dispatch(setPokemons({pokemons:data.results , page: page +1}));

  }


};

export const newThunks = createAsyncThunk('todo',()=>{

  

});

