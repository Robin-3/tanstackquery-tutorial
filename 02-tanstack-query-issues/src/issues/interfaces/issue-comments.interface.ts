import { Reactions, User } from "./issue.interface";

export interface GithubIssueComments {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  node_id: string;
  user: User;
  created_at: Date;
  updated_at: Date;
  author_association: string;
  body: string;
  reactions: Reactions;
  performed_via_github_app: PerformedViaGithubApp;
}

export interface PerformedViaGithubApp {
  id: number;
  client_id: string;
  slug: string;
  node_id: string;
  owner: User;
  name: string;
  description: string;
  external_url: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
  permissions: Permissions;
  events: string[];
}

export interface Permissions {
  administration: string;
  checks: string;
  contents: string;
  deployments: string;
  emails: string;
  issues: string;
  members: string;
  metadata: string;
  pull_requests: string;
  repository_hooks: string;
  statuses: string;
}
