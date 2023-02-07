import Navbar from "./components/Navbar"
import FormTweet from "./components/FormTweet"
import Tweet from "./components/Tweet"
import Footer from "./components/Footer"
import ChartComponent from "./components/ChartComponent"

import { useState } from 'react';


function App() {
  const [tweetsData, setTweetsData] = useState([]);

  const handleFormSubmit = (data) => {
    setTweetsData(data);
  };

  return (
    <div className=" w-full h-full relative ">
      <div className="flex h-screen flex-1 flex-col">
        <main className="relative h-full w-full transition-width flex flex-col  items-stretch flex-1">
          <div className="flex-1 ">
            <div className="min-h-full transition duration-500 bg-primary dark:bg-gray-800">
              <div className="flex flex-col items-center text-sm h-full dark:bg-gray-800">
                <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full 
                    md:flex md:flex-col px-6 dark:text-gray-100">
                  <Navbar />
                  <div className='text-4xl font-bold text-quaternary dark:text-primary font-[fantasy] text-center mt-6 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center'>
                    <h1>JUDGMENT</h1>
                    <img src="assets/images/logo.png" height={150} width={150} alt="" />
                    <h1>TWEET</h1>
                  </div>
                  <FormTweet onFormSubmit={handleFormSubmit} />
                  <ChartComponent tweetsData={tweetsData} />
                </div>
                <div className="w-full h-32 md:h-48 flex-shrink-0"></div>
              </div>
            </div>
          </div>
          <div className="w-full border-t md:border-t-0 dark:border-white/20 
            md:border-transparent md:dark:border-transparent bg-primary
            dark:bg-gray-800">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
