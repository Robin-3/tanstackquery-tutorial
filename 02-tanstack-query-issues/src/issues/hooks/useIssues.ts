import { useInfiniteQuery } from "@tanstack/react-query";
import { getIssues } from "../actions";
import { State } from "../interfaces";

interface Props {
  state: State;
  selectedLabels: string[];
}

export const useIssues = ({ state, selectedLabels }: Props) => {
  const issuesQuery = useInfiniteQuery({
    queryKey: <[string, string, Props]>[
      "issues",
      "infinite",
      { state, selectedLabels: selectedLabels.sort() }
    ],
    queryFn: ({ pageParam, queryKey }) => {
      const [, , args] = queryKey;
      const { state, selectedLabels } = args;

      return getIssues(state, selectedLabels, pageParam);
    },
    staleTime: 1000 * 60, // 1min
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length > 0 ? pages.length + 1 : undefined
  });

  return { issuesQuery };
};
