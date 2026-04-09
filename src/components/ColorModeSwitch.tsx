import { Icon, Switch } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  colorMode: string;
  toggleColorMode: () => void;
}

const ColorModeSwitch = ({ colorMode, toggleColorMode }: Props) => {
  return (
    <Switch.Root
      size="lg"
      checked={colorMode === "dark"}
      onCheckedChange={toggleColorMode}
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
