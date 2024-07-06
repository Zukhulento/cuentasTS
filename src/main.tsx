import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "primeicons/primeicons.css";
import { MainApp } from "./components/MainApp";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <MainApp />
    </PrimeReactProvider>
  </React.StrictMode>
);
