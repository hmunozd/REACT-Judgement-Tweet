import { useState } from 'react'
import Navbar from "./components/Navbar"
import TweetComments from './Twiits'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={`h-full w-full mx-auto py-2 ${darkMode ? "bg-gray-800 text-zinc-50" : ""}`}>
      <Navbar darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {/* <TweetComments username="Jildo_MD" /> */}
      <h1>holanda</h1>
    </div>
  )
}

export default App
