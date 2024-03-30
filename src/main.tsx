import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { RootProvider } from "./contexts/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootProvider>
      <BrowserRouter>
        <Theme
          appearance="light"
          accentColor="yellow"
          grayColor="sage"
          radius="full"
          scaling="110%"
        >
          <App />
        </Theme>
      </BrowserRouter>
    </RootProvider>
  </React.StrictMode>,
);
