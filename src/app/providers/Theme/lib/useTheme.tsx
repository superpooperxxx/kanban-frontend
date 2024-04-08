import { Dispatch, SetStateAction, useContext } from "react";

import { Theme, ThemeContext } from "./Context";

export const useTheme = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const { theme, setTheme } = useContext(ThemeContext);

  return [theme, setTheme];
};
