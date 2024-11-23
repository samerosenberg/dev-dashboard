import Header from "../components/Header";
import CardLayout from "@/layouts/CardLayout";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";

function MainLayout() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { toast } = useToast();
    const location = useLocation();
    const { jira_auth, error } = location.state || {};

    useEffect(() => {
        if (jira_auth === "success") {
            toast({ description: "Successfully logged in with Jira!" });
        } else if (jira_auth === "failure") {
            toast({ variant: "destructive", description: "Failed to log in with Jira: " + error });
        }
    }, [jira_auth]);

    return (
        <div className="h-screen w-screen bg-white-900 dark:bg-black-900">
            <Header />
            <CardLayout />
        </div>
    );
}

export default MainLayout;
