import { useState } from 'react'
import Navbar from "./components/Navbar"
import TweetComments from './Twiits'

function App() {

  return (
    <div className={`min-h-screen w-full flex flex-col transition duration-200 dark:bg-gray-800 dark:text-zinc-50`}>
      <Navbar />
      {/* <TweetComments username="Jildo_MD" /> */}
      <h1>holanda</h1>
    </div>
  )
}

export default App
