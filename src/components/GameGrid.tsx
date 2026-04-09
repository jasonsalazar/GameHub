import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
          </li>
        ))}
      </ul>
      {error && <Text>{error}</Text>}
    </>
  );
};
export default GameGrid;
