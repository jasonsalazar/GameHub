import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack p={2} as="nav" position="sticky" top={0} zIndex={1} bg="bg">
      <Image src={logo} boxSize={12} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
