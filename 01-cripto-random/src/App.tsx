import { useQuery } from "@tanstack/react-query";
import "./App.css";

const getCriptoNumber = async (): Promise<number> => {
  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());

  return Number(resp);
};

export const App = () => {
  const {
    isLoading,
    isFetching,
    data: number,
    error,
    refetch
  } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCriptoNumber
  });

  return (
    <>
      <h1>{isLoading ? "Cargando" : `Número: ${number}`}</h1>
      <div>{JSON.stringify(error)}</div>
      <button onClick={() => refetch()} disabled={isFetching}>
        Nuevo número
      </button>
    </>
  );
};
