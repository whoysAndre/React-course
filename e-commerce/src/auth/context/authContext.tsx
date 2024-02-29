import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";



export const AuthContext = createContext({});

const initialState = {
  logged: false,
};


const init = ()=>{
  const user = JSON.parse(localStorage.getItem('user')!)|| '';

  return {
    user,
    logged: !!user
  };
};

export const AuthProvider = ({children}:any) => {
  
  const [state,dispatch] = useReducer(authReducer,initialState,init);

  const login = (name = "")=>{

    const action = {
      type: '[AUTH] Login',
      payload: name
    }

    localStorage.setItem('user',JSON.stringify({name}));

    dispatch(action);
  }
  
  const logout = ()=>{
    
    localStorage.removeItem('user');

    const action = {
      type: '[AUTH] Logout'
    };
    dispatch(action);
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
