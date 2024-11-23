import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Button } from "./ui/button";
import GithubSVGLight from "../assets/github-mark.svg?react";
import GithubSVGDark from "../assets/github-mark-white.svg?react";
import { useTheme } from "./theme-provider";

function GitHubButton() {
    const { theme } = useTheme();

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "github",
        });

        if (error) {
            console.error("Error logging in with GitHub:", error);
        }
    };

    return (
        <Button
            variant="outline"
            onClick={handleLogin}
            className="flex flex-col w-6/12 h-6/12 pt-4"
        >
            <div className="flex items-center justify-center w-full h-5/6">
                {theme === "light" ? (
                    <GithubSVGLight className="mb-2" />
                ) : (
                    <GithubSVGDark className="mb-2" />
                )}
            </div>
            Login with GitHub
        </Button>
    );
}

export default GitHubButton;
