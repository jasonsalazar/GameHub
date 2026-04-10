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
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

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

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <Theme appearance={colorMode} minH="100vh">
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
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
          <GridItem
            area="aside"
            display={{ base: "none", lg: "block" }}
            paddingX={5}
          >
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
          <GridItem area="main">
            <PlatformSelector />
            <GameGrid selectedGenre={selectedGenre} />
          </GridItem>
        </Grid>
      </Theme>
    </>
  );
}

export default App;
