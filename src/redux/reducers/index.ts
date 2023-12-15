import ThemeReducer from "./ThemeReducer";
import { combineReducers } from "redux";

import type { ThemeState } from "./ThemeReducer";
import TodoReducer from "./TodoReducer";

// Define the root state type by combining all the individual state types
export type RootState = {
  ThemeReducer:  ReturnType < typeof ThemeReducer>;
  theme: ThemeState; // Add other states here if using more reducers
  todoReducer: ReturnType <typeof TodoReducer>
};

const rootReducer = combineReducers<RootState>({
  theme: ThemeReducer,
  todos:TodoReducer
});

export default rootReducer;
