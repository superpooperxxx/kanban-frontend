import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "@/app/App";
import { ThemeProvider } from "@/app/providers/Theme";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById("app") as HTMLDivElement);

root.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);
