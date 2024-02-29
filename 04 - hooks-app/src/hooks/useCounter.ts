import { useState } from "react";


export const useCounter = (initialValue:number = 10)=>{

  const [counter, setCounter] = useState(initialValue);

  const increment = (value:number)=>{
    setCounter(counter + value);
  };

  const decrement = (value:number)=>{
    setCounter(counter - value);
  };

  const reset = ()=>{
    setCounter(0);
  };

  return{
    counter,
    increment,
    decrement,
    reset
  }


};





