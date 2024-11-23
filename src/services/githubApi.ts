// utils/githubAPI.ts
import { Octokit } from "@octokit/core";

export const fetchGitHubData = async (
    token: string,
    type: "issues" | "pulls", // Type can be either 'issues' or 'pulls' //TODO make this a type
    assignee: string,
    repo: string
) => {
    const octokit = new Octokit({ auth: token });

    try {
        const { data } = await octokit.request(`GET /repos/{owner}/{repo}/${type}`, {
            owner: assignee,
            repo: repo,
        });
        return data; 
    } catch (error) {
        console.error(`Error fetching GitHub ${type}:`, error);
        throw error;
    }
};
