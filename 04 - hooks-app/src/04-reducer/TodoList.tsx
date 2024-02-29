import { TodoItem } from "./TodoItem";

interface IProps {
  todos: Todo[],
};

interface Todo {
  id: number;
  description: string;
  done: boolean;

}

export const TodoList = ({ todos }: IProps) => {
  
  
  
  return (
    <ul className="list-group">
      {
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}/>
        ))
      }
    </ul>
  )
}
