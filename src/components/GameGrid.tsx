import { SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const screenSize = useBreakpointValue({ sm: 1, md: 2, lg: 3, xl: 4 });
  const skeletons = [...Array(screenSize ? screenSize * 2 : 4).keys()]; //Array.from({ length: 15 }, (_, i) => i + 1)

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={screenSize} padding="10px" gap={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {!data?.results.length && !isLoading && <Text>No games found.</Text>}

      {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
export default GameGrid;
