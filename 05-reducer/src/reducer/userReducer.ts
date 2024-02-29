

interface InitialState {
  id: number;
  name: string;
  age: number;
}

export const userReducer = (state:InitialState[],action:any)=>{

  switch (action.type) {
    case 'Add Todo':
      return [...state,action.payload]  
    default:
      return state;
  }

};

