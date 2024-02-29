import { useEffect, useReducer } from "react"
import { userReducer } from "./reducer/userReducer";

const initialState = [
  {
    id: 1,
    name: 'Rodrigo',
    age: 21
  },
  {
    id: 2,
    name: 'Fabiano',
    age: 12
  }
]

const newUser = {
  id: 3,
  name: 'Caory',
  age: 12
}


const init = ()=>{
  return JSON.parse(localStorage.getItem('users')!)||[];
}

function App() {

  const [state,dispatch] =  useReducer(userReducer,initialState,init);

  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(state));
  },[state])


  const onAdd = (user:any)=>{
    const action = {
      type: 'Add Todo',
      payload: user
    }

    dispatch(action);
  };
  

  return (
    <>
      <h1>useReducer Teory</h1>
      <button onClick={()=>onAdd(newUser)}>Add</button>

      {
        state.map(user=>(
          <div key={user.id}>
            <span>{user.name}</span>
          </div>
        ))
      }
    </>
  )
}

export default App
