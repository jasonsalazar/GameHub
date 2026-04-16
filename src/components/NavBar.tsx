import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack p={2} as="nav" position="sticky" top={0} zIndex={1} bg="bg">
      <Link to="/">
        <Image src={logo} boxSize={12} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
