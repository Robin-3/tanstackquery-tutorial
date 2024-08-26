import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";
import { type GithubLabel } from "../interfaces";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, //1 hour
    initialData: [
      // staleTime
      // placeholderData: [
      {
        id: 739777675,
        node_id: "MDU6TGFiZWw3Mzk3Ncz2NzU=",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
        name: "Component: Component API",
        color: "d4c5f9",
        default: false,
        description: null
      } satisfies GithubLabel,
      {
        id: 139734344,
        node_id: "MDU6TGFiZWwxMzk3MzQzNDQ=",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Utils",
        name: "Component: Test Utils",
        color: "eb6420",
        default: false,
        description: null
      } satisfies GithubLabel
    ]
  });

  return { labelsQuery };
};
