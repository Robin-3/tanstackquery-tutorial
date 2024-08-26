import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers";
import { type GithubIssueComments } from "../interfaces";

export const getIssueComments = async (
  issueNumber: number
): Promise<GithubIssueComments[]> => {
  await sleep(1500);

  const { data } = await githubApi.get<GithubIssueComments[]>(
    `/issues/${issueNumber}/comments`
  );

  return data;
};
