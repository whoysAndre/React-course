

interface State{
  logged: boolean;
}


export const authReducer = (state:State,action:any)=>{

  switch (action.type) {
    case '[AUTH] Login':
      return {
        ...state,
        logged: true,
        user: action.payload
      };
    case '[AUTH] Logout':
      return {
        logged: false
      }
    default:
      return state;
  }
};

