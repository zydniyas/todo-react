import { useContext } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";

function ToDoBody() {
  const { todo } = useContext(TodoContext);

  return (
    <div>
      <ul className="mx-4 p-2.5">
        {todo.map((item, i) => (
          <TodoItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoBody;
