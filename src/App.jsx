import { createContext, useState } from "react";
import InputFeid from "./components/InputFeid";
import ToDoBody from "./components/ToDoBody";
export const TodoContext = createContext({});

function App() {
  const [note, setNote] = useState("");
  const [todo, setTodo] = useState([]);
  const addTodo = () => {
    if (note !== "") {
      let currentTodo = { id: todo.length + 1, text: note, checked: false };
      setTodo([...todo, currentTodo]);
      setNote("");
    } else {
      alert("type something");
    }
  };
  const updateTodo = (id, updatedValue) => {
    let [editedTodo] = todo.filter((elem) => elem.id == id);
    let tempTodo = [...todo];
    tempTodo[id - 1] = { ...editedTodo, text: updatedValue };
    setTodo(tempTodo);
  };
  const deleteTodo = (id) => {
    let clearedTodo = todo.filter((elem) => elem.id != id);
    setTodo(clearedTodo);
  };
  const checkTodo = (id) => {
    let [checkedTodo] = todo.filter((elem) => elem.id == id);
    let tempTodo = [...todo];
    tempTodo[id - 1] = { ...checkedTodo, checked: !checkedTodo.checked };
    setTodo(tempTodo);
  };
  return (
    <>
      <TodoContext.Provider
        value={{
          todo,
          setTodo,
          addTodo,
          note,
          setNote,
          updateTodo,
          deleteTodo,
          checkTodo,
        }}
      >
        <ToDoBody />
        <InputFeid />
      </TodoContext.Provider>
    </>
  );
}

export default App;
