import { Icon, Switch } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../themeContext";

const ColorModeSwitch = () => {
  const { isDarkMode, dispatch } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("dark-mode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <Switch.Root
      size="lg"
      checked={isDarkMode}
      onCheckedChange={() => dispatch({ type: "ToggleDarkMode" })}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaSun} color="yellow.400" />}>
          <Icon as={FaMoon} color="gray.400" />
        </Switch.Indicator>
      </Switch.Control>
    </Switch.Root>
  );
};
export default ColorModeSwitch;
