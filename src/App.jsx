import { createContext, useState } from "react";
import InputFeid from "./components/InputFeid";
import ToDoBody from "./components/ToDoBody";
export const TodoContext = createContext({});

function App() {
  const [note, setNote] = useState("");
  const [todo, setTodo] = useState([]);
  const addTodo = () => {
    let currentTodo = { id: todo.length + 1, text: note };
    setTodo([...todo, currentTodo]);
    setNote("");
  };
  const updateTodo = (id, updatedValue) => {
    let [editedTodo] = todo.filter((elem) => elem.id == id);
    let tempTodo = [...todo];
    tempTodo[id - 1] = { ...editedTodo, text: updatedValue };
    setTodo(tempTodo);
  };
  return (
    <>
      <TodoContext.Provider
        value={{ todo, setTodo, addTodo, note, setNote, updateTodo }}
      >
        <ToDoBody />
        <InputFeid />
      </TodoContext.Provider>
    </>
  );
}

export default App;
