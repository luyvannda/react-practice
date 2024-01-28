// import { useEffect, useState } from "react";
import "./App.css";
import ToDos from "./components/ToDos";
import { useRecoilValue } from "recoil";
import { totalTodos } from "./state/selectors/TotalTodos";

export default function App() {
  const totalTodoState = useRecoilValue(totalTodos);

  return (
    <div className="w-screen h-screen">
      <div className="container mx-4 flex flex-col justify-center items-center">
        <h1>Hello</h1>
        <ToDos />

        <h3>Total Todos: {totalTodoState}</h3>
      </div>
    </div>
  );
}
