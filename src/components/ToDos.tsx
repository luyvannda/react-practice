import React from "react";

interface ToDosProps {}

export default function ToDos(props: ToDosProps) {
  return (
    <main>
      <input className="outline outline-cyan-900" type="text" id="todoInput" />
      <button className="w-32 bg-blue-400">Add Todo</button>
      <button className="w-32 bg-slate-300">Clear Todos</button>
    </main>
  );
}
