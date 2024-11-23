import { useEffect, useState } from "react";
import { fetchGitHubData } from "../services/githubApi"; 

export const useGitHubData = (
    token: string | null,
    type: "issues" | "pulls",
    assignee: string,
    repo: string
) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                setError("No GitHub token available.");
                return;
            }

            try {
                setLoading(true);
                const fetchedData = await fetchGitHubData(token, type, assignee, repo); // Replace 'username' with the logged-in user's GitHub username
                setData(fetchedData);
            } catch (error) {
                setError("Failed to fetch data from GitHub.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [token]);

    return { data, loading, error };
};
