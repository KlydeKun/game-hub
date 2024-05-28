import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const {games, error} = useGames();

  return (
    <>
    {/* Error Validation */}
      {error && <Text>{error}</Text>}
      <ul>
        {/* Display the data */}
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
