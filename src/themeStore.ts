import { create } from "zustand";

interface ThemeStore {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const saved = localStorage.getItem("dark-mode");
const currentDarkMode =
  saved === "true" ||
  (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);

const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: currentDarkMode,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useThemeStore;
