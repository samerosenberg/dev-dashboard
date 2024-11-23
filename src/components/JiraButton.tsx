import React, { useState } from "react";
import { Button } from "./ui/button";
import JiraSVGLight from "../assets/mark-gradient-blue-jira.svg?react";
import JiraSVGDark from "../assets/mark-gradient-white-jira.svg?react";
import { useTheme } from "./theme-provider";

function JiraButton() {
    const { theme } = useTheme();

    const handleLogin = async () => {
        const jiraLoginUrl = `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=${
            import.meta.env.VITE_JIRA_CLIENT_ID
        }&redirect_uri=${
            import.meta.env.VITE_JIRA_REDIRECT_URI
        }&response_type=code&scope=read%3Ajira-work%20read%3Ajira-user&prompt=consent`;
        window.location.href = jiraLoginUrl;
    };

    return (
        <Button
            variant="outline"
            onClick={handleLogin}
            className="flex flex-col w-6/12 h-6/12  pt-4"
        >
            <div className="flex items-center justify-center w-full h-5/6">
                {theme === "light" ? (
                    <JiraSVGLight className="mb-2" />
                ) : (
                    <JiraSVGDark className="mb-2" />
                )}
            </div>
            Login with Jira
        </Button>
    );
}

export default JiraButton;
