// useGithubListener.ts
import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient"; 

export const useGithubAuthListener = () => {
    const [githubToken, setGithubToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkActiveSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) {
                console.error("Error fetching session:", error.message);
                return;
            }
            if (session?.provider_token) {
                setGithubToken(session.provider_token);
            } else {
                setError("No provider token available.");
            }
        };

        checkActiveSession();

        const listener = supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === "SIGNED_IN" && session?.user) {
                const providerToken = session.provider_token;

                if (providerToken) {
                    setGithubToken(providerToken);
                } else {
                    setError("No provider token available.");
                }
            } else {
                setError("No event or session available.");
            }
        });

        return () => {
            listener.data?.subscription.unsubscribe();
        };
    }, []);

    return { githubToken, error };
};
