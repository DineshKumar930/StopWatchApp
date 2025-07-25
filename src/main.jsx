import "./index.css";
import App from "./App.jsx";
import MobileApp from "./Assignment/MobileApp.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <MobileApp/>
  </StrictMode>,
)
