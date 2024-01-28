import { selector } from "recoil";
import { todoState } from "../atoms/TodoState";

export const totalTodos = selector({
  key: "totalTodos", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const todoAtoms = get(todoState);

    return todoAtoms.length;
  }
});
