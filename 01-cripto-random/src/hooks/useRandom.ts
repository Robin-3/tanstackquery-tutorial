import { useQuery } from "@tanstack/react-query";

const getCriptoNumber = async (): Promise<number> => {
  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());

  return Number(resp);
};

export const useRandom = () => {
  const randomQuery = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCriptoNumber,
    refetchOnWindowFocus: false,
    retry: 1
  });

  return { randomQuery };
};
