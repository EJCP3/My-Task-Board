import { createContext, useReducer } from "react";
import { tasks } from "../data/task";
import taskReducer from "./TaskReducer";
import { v4 } from "uuid";

const initialState = {
  tasks,
};

export const GlobalState = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (task) =>
    dispatch({ type: "ADD_TASK", payload: { ...task, id: v4() } });

  const deleteTask = (id) => dispatch({ type: "DELETE_TASK", payload: id });

  const updateTask = (task) => dispatch({ type: "UPDATE_TASK", payload: task });

  return (
    <GlobalState.Provider value={{ ...state, addTask, deleteTask,updateTask }}>
      {children}
    </GlobalState.Provider>
  );
};
