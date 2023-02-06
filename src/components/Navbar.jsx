import React from "react";
import useDarkMode from '../hooks/useDarkMode';

export default function Nav() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="grid grid-cols-2 place-content-between items-center w-full">
      <h2>OhMyTweet</h2>
      <span onClick={toggleDarkMode} className="material-symbols-sharp">{isDarkMode ? 'dark_mode' : 'light_mode'}</span>
    </nav>
  )
}