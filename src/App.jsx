// import { useEffect, useState } from "react";
import "./App.css";
import ToDos from "./components/ToDos";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <div className="container mx-4 flex flex-col justify-center items-center">
        <h1>Hello</h1>
        <ToDos />
      </div>
    </div>
  );
}
