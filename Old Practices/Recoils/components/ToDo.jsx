import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";

// eslint-disable-next-line react/prop-types
export default function ToDo({ text, id }) {
  const setToDos = useSetRecoilState(todoState);

  function deleteToDo() {
    setToDos((prevToDos) => {
      return prevToDos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="container text-lg pt-3 flex justify-center gap-3">
      <p>{text}</p>
      <button onClick={deleteToDo} className="w-10 bg-red-500 rounded-md">
        X
      </button>
    </div>
  );
}
