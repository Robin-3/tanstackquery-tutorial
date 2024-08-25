import { useQuery } from "@tanstack/react-query";

const getCriptoNumber = async (): Promise<number> => {
  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());

  return Number(resp);
};

export const RandomNumber = () => {
  const { data } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCriptoNumber,
    staleTime: 1000 * 5 // 5seg
  });
  return <div>{`Random Number: ${data}`}</div>;
};
