import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JiraAuth from "./components/JiraAuth";
import { Toaster } from "./components/ui/toaster";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="/auth/callback" element={<JiraAuth />} />
                </Routes>
            </BrowserRouter>
            <Toaster />
        </ThemeProvider>
    );
    //TODO Add error route
}

export default App;
