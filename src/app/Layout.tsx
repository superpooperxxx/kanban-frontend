import { Link, Outlet } from "react-router-dom";
import cn from "classnames";

import { Theme, useTheme } from "./providers/Theme";

export const Layout = () => {
  const [theme, setTheme] = useTheme();

  return (
    <div
      className={cn("page", {
        "theme--light": theme === Theme.LIGHT,
        "theme--dark": theme === Theme.DARK,
      })}
    >
      <nav>
        <Link to="about">about</Link>
        <Link to="login">Login</Link>
      </nav>

      <Outlet />
    </div>
  );
};
