import React, { createContext, useReducer } from "react";
import { ReactNode } from "react";
import { themeReducer } from "../redux/reducers";

interface ThemeContextInterface {
  state: { darkMode: boolean };
  dispatch: React.Dispatch<{ type: string }>
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

const initialState = { darkMode: false };

export function ThemeProvider(props: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  
  return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
}

export function changingTheme(darkMode: boolean) {
  const doc = document.documentElement.style;
  if (darkMode) {
    doc.setProperty('--navbar-color', 'lightsalmon');
    doc.setProperty('--bg-color', '#f4f4f4');
    doc.setProperty('--component-bg-color', 'white');
    doc.setProperty('--remove-movie-color', 'black');
    doc.setProperty('--no-results', '#424242');
    doc.setProperty('--text-color', 'black')
  } else {
    doc.setProperty('--navbar-color', '#595B83');
    doc.setProperty('--bg-color', '#121212');
    doc.setProperty('--component-bg-color', '#444444');
    doc.setProperty('--remove-movie-color', 'white');
    doc.setProperty('--no-results', '#D6D5A8');
    doc.setProperty('--text-color', 'white')
  }
}
