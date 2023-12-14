import ThemeReducer from "./ThemeReducer";
import { combineReducers } from "redux";

import type { ThemeState } from "./ThemeReducer";

// Define the root state type by combining all the individual state types
export type RootState = {
  ThemeReducer: any;
  theme: ThemeState; // Add other states here if using more reducers
};

const rootReducer = combineReducers<RootState>({
  theme: ThemeReducer,
});

export default rootReducer;
