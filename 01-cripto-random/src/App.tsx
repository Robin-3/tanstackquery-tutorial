import "./App.css";
import { useRandom } from "./hooks/useRandom";

export const App = () => {
  const { randomQuery } = useRandom();

  return (
    <>
      <h1>
        {randomQuery.isLoading ? "Cargando" : `Número: ${randomQuery.data}`}
      </h1>
      <div>{JSON.stringify(randomQuery.error)}</div>
      <button
        onClick={() => randomQuery.refetch()}
        disabled={randomQuery.isFetching}
      >
        Nuevo número
      </button>
    </>
  );
};
