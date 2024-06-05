import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesReponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]); //Storing Game objects
  const [error, setError] = useState(""); // Error Messages

  // to send the fetch request to the backend
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesReponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  // To use it to other components
  return { games, error };
};

export default useGames;
