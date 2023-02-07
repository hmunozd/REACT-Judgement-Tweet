import React from "react";
import useDarkMode from '../hooks/useDarkMode';

export default function Nav() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="flex flex-row pt-3 justify-end w-full">
      <span onClick={toggleDarkMode} className="material-symbols-sharp">{isDarkMode ? 'dark_mode' : 'light_mode'}</span>
      <a  className="material-symbols-sharp"></a>
    </nav>
  )
}