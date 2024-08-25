import { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    )
      .then((resp) => resp.json())
      .then((data) => setNumber(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [refreshToken]);

  return (
    <>
      <h1>{isLoading ? "Cargando" : `Número: ${number}`}</h1>
      <div>{error}</div>
      <button
        onClick={() => setRefreshToken(refreshToken + 1)}
        disabled={isLoading}
      >
        Nuevo número
      </button>
    </>
  );
};
