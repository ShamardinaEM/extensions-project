import { createContext } from "react";

export const ThemeContext = createContext({
  isActive: false,
  setIsActive: (value: boolean) => {},
});