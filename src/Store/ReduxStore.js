import { createStore } from "redux";
import { ChangeTimeReducer } from "../Reducer/StopwatchReducer";

export const myStore = () => createStore(ChangeTimeReducer);
