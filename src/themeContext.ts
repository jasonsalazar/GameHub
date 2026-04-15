import React, { type Dispatch } from "react";
import type { Action } from "./themeReducer";

interface ThemeContextType {
  isDarkMode: boolean;
  dispatch: Dispatch<Action>;
}
const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType,
);

export default ThemeContext;
