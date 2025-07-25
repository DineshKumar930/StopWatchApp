import "./index.css";
import App from "./App.jsx";
import StopWatchApp from "./Assignment/StopWatchApp.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <StopWatchApp/>
  </StrictMode>,
)
