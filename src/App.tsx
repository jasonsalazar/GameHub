import {
  Box,
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
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

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

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <GridItem area="nav" position="sticky" top={0} zIndex={1} bg="bg">
            <HStack p={2}>
              <NavBar />
              <SearchInput
                onSearch={(searchText) =>
                  setGameQuery({ ...gameQuery, searchText })
                }
              />
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
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
          <GridItem area="main">
            <Box paddingLeft={2}>
              <GameHeading gameQuery={gameQuery} />
              <HStack gap={5} marginBottom={5}>
                <PlatformSelector
                  selectedPlatformId={gameQuery.platformId}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platformId: platform.id })
                  }
                />
                <SortSelector
                  sortOrder={gameQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </HStack>
            </Box>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </Theme>
    </>
  );
}

export default App;
