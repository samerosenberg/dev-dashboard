import Configuration from "@/components/Configuration";
import Header from "../components/Header";
import CardLayout from "@/layouts/CardLayout";
import { useState } from "react";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className="h-screen w-screen bg-white-900 dark:bg-black-900">
            <Header />
            <Configuration />
            <CardLayout />
        </div>
    );
}

export default App;
