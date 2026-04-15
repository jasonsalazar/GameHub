import { Icon, Switch } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import useThemeStore from "../hooks/useThemeStore";
import { useEffect } from "react";

const ColorModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    localStorage.setItem("dark-mode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <Switch.Root
      size="lg"
      checked={isDarkMode}
      onCheckedChange={() => toggleDarkMode()}
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
