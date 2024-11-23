export type DataProvider = GitHubData | JiraData;

export interface GitHubData {
    type: string;
    repo: string;
}

export interface JiraData {
    type: string;
    repo: string;
}