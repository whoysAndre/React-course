import React, {useState } from "react"

export const TodoAdd = ({onNewTodo}:any) => {
  
  const [description,setDescription] = useState('')
  


  const onSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    
    if(description.length <= 1)return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description
    };

    onNewTodo(newTodo);

    setDescription('');

  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}
