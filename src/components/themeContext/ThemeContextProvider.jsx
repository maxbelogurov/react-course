import { useState} from "react";
import {ThemeContext} from "./ThemeContext";

export const ThemeContextProvider = ( {children} )  => {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
