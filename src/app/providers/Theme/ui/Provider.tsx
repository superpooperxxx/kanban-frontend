import { FC, ReactNode, useMemo } from "react";

import { useLocalStorage } from "@/shared/hooks";

import { Theme, ThemeContext, ThemeContextType } from "../lib/Context";

interface Props {
  children: ReactNode;
}

export const Provider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<Theme>(Theme.LIGHT, "theme");

  const value: ThemeContextType = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
