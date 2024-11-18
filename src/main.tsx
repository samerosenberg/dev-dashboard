import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
);
