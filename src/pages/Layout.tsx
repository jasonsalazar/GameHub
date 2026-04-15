import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Theme } from "@chakra-ui/react";
import useThemeStore from "../themeStore";

const Layout = () => {
  const isDarkMode = useThemeStore((s) => s.isDarkMode);
  const theme = isDarkMode ? "dark" : "light";

  return (
    <Theme appearance={theme} minH="100vh">
      <NavBar />
      <Outlet />{" "}
    </Theme>
  );
};

export default Layout;
