import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Theme } from "@chakra-ui/react";
import { useReducer } from "react";
import themeReducer from "../themeReducer";
import ThemeContext from "../themeContext";

const Layout = () => {
  const saved = localStorage.getItem("dark-mode");
  const currentDarkMode =
    saved === "dark" ||
    (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [isDarkMode, dispatch] = useReducer(themeReducer, currentDarkMode);
  const theme = isDarkMode ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ isDarkMode, dispatch }}>
      <Theme appearance={theme} minH="100vh">
        <NavBar />
        <Outlet />{" "}
      </Theme>
    </ThemeContext.Provider>
  );
};

export default Layout;
