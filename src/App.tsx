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
import GameGrid from "./components/GameGrid";

function App() {
  const saved = localStorage.getItem("colorMode");
  const [colorMode, setColorMode] = useState<ThemeProps["appearance"]>(
    saved ? JSON.parse(saved) : "light",
  );

  const changeMode = () => {
    const theme = colorMode === "light" ? "dark" : "light";
    setColorMode(theme);
    localStorage.setItem("colorMode", JSON.stringify(theme));
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
              <ColorModeSwitch
                colorMode={colorMode!}
                toggleColorMode={changeMode}
              />
            </HStack>
          </GridItem>
          <GridItem area="aside" display={{ base: "none", lg: "block" }}>
            Aside
          </GridItem>
          <GridItem area="main">
            <GameGrid />
          </GridItem>
        </Grid>
      </Theme>
    </>
  );
}

export default App;
