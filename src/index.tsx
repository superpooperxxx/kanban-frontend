import { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./App";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById("app"));
root.render(<App />);
