
interface IProps {
  todo: Todo
};

interface Todo {
  id: number;
  description: string;
  done: boolean;
}

export const TodoItem = ({ todo }:IProps) => {
  
  

  
  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">
        {todo.description}
      </span>
      <button className="btn btn-danger">X</button>
    </li>
  )
}
