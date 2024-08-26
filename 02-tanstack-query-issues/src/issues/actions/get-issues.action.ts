import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers";
import { State, type GithubIssue } from "../interfaces";

export const getIssues = async (
  state: State,
  selectedLabels: string[],
  page: number
): Promise<GithubIssue[]> => {
  await sleep(1500);

  const params = new URLSearchParams();
  params.append("per_page", "5");
  params.append("page", `${page}`);

  if (state !== State.All) {
    params.append("state", state);
  }
  if (selectedLabels.length > 0) {
    params.append("labels", selectedLabels.join(","));
  }

  const { data } = await githubApi.get<GithubIssue[]>("/issues", { params });

  return data;
};
