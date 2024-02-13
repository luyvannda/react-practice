import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import { useState } from "react";
import ToDo from "./ToDo";

export default function ToDos() {
  const [todos, setToDos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState("");

  function addToDo() {
    setToDos((prevToDos) => [
      ...prevToDos,
      {
        id: prevToDos.length + 1,
        text: inputText
      }
    ]);

    setInputText("");
  }

  console.log({ todos });

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function clearToDo() {
    setToDos([]);
  }

  return (
    <main>
      <input
        value={inputText}
        onChange={handleInputChange}
        className="outline outline-cyan-900"
        type="text"
        id="todoInput"
      />
      <button onClick={addToDo} className="w-28 bg-blue-400">
        Add Todo
      </button>
      <button onClick={clearToDo} className="w-28 bg-slate-300">
        Clear Todos
      </button>

      {todos.map((todo) => {
        return <ToDo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </main>
  );
}
