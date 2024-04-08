import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";

import { Layout } from "./Layout";

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<p>Home</p>} />
      <Route path="about" element={<p>About</p>} />
      <Route path="login" element={<p>Login</p>} />
    </Route>
  </Routes>
);
