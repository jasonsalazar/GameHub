export interface Action {
  type: string;
}

const themeReducer = (state: boolean, action: Action): boolean => {
  if (action.type === "ToggleDarkMode") return !state;
  return state;
};

export default themeReducer;
