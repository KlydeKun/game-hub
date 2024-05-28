import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesReponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]); //Storing Game objects
  const [error, setError] = useState(""); // Error Messages

  // to send the fetch request to the backend
  useEffect(() => {
    apiClient
      .get<FetchGamesReponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
    {/* Error Validation */}
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
