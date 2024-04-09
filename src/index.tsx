import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@/app/providers/Theme";
import { RouterProvider } from "@/app/providers/Router";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById("app") as HTMLDivElement);

root.render(
  <ThemeProvider>
    <RouterProvider />
  </ThemeProvider>
);
