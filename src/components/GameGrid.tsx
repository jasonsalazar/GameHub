import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

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
