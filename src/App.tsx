import {
  Grid,
  GridItem,
  HStack,
  Theme,
  type ThemeProps,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import { useState } from "react";

function App() {
  const [colorMode, setColorMode] = useState<ThemeProps["appearance"]>("light");
  const changeMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <>
      <Theme appearance={colorMode} minH="100vh">
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
        >
          <GridItem area="nav">
            <HStack justifyContent="space-between" p={2}>
              <NavBar />
              <ColorModeSwitch toggleColorMode={changeMode} />
            </HStack>
          </GridItem>
          <GridItem area="aside" display={{ base: "none", lg: "block" }}>
            Aside
          </GridItem>
          <GridItem area="main">Main</GridItem>
        </Grid>
      </Theme>
    </>
  );
}

export default App;
