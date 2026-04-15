import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Theme } from "@chakra-ui/react";
import useThemeStore from "../hooks/useThemeStore";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const isDarkMode = useThemeStore((s) => s.isDarkMode);
  const theme = isDarkMode ? "dark" : "light";

  return (
    <Theme appearance={theme} minH="100vh">
      <NavBar />
      <Box padding={3}>{children ?? <Outlet />}</Box>
    </Theme>
  );
};

export default Layout;
