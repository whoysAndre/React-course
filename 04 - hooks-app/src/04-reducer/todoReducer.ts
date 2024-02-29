interface InitialState{
  id: number;
  description: string;
  done: boolean;
};

export const todoReducer = (initialState:InitialState[] , action:any)=>{

  console.log(action)

  switch(action.type){
    case 'Add Todo':
      return [ ...initialState, action.payload ];
    case 'Delete Todo':
      const deleteTodo = initialState.filter(todo=>todo.id !== action.payload);
      return deleteTodo;
    default:
      return initialState
  };
};