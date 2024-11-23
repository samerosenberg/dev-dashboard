// src/components/AuthCallback.tsx
import { supabase } from "@/services/supabaseClient";
import { setAccessToken } from "@/store/features/jiraSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const JiraAuth: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) {
            return;
        }
        initialized.current = true;
        // Retrieve the authorization code or token from the URL
        const params = new URLSearchParams(window.location.search);
        const authCode = params.get("code");
        const error = params.get("error");

        if (error) {
            // Handle error (authentication failed, etc.)
            console.error("OAuth Error:", error);
            return;
        }

        if (authCode) {
            // Proceed to exchange the authorization code for an access token
            fetchAccessToken(authCode);
        }
    }, []);

    const fetchAccessToken = async (access_code: string) => {
        try {
            // Call your API (Supabase or custom server) to exchange the auth code for an access token
            const { data, error } = await supabase.functions.invoke("jira-auth", {
                body: { code: access_code },
            });

            if (data?.access_token) {
                // Store access token in local state or context
                // Example: store in localStorage or context
                dispatch(setAccessToken(data.access_token));

                // Redirect to the dashboard or home page
                navigate("/", { state: { jira_auth: "success" } });
            } else {
                console.error("Failed to fetch access token", error.message);
                navigate("/", { state: { jira_auth: "failure", error: error.message } });
            }
        } catch (error: any) {
            console.error("Error exchanging code:", error.message);
        }
    };

    return (
        //TODO make this a loading spinner
        <div>
            <h2>Processing Login...</h2>
            <p>Please wait while we finish setting up your account.</p>
        </div>
    );
};

export default JiraAuth;
