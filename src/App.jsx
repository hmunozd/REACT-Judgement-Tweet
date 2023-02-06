import Navbar from "./components/Navbar"
import FormTweet from "./components/FormTweet"
import Tweet from "./components/Tweet"
import Footer from "./components/Footer"
import ChartComponent from "./components/ChartComponent"
import Historial from "./components/Historial"

function App() {
  
  return (
    <div className="overflow-hidden w-full h-full relative">
      <div className="flex h-screen flex-1 flex-col md:pl-[260px]">
        <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
          <div className="flex-1 overflow-hidden">
            <div className="min-h-full bg-primary dark:bg-gray-800">
              <div className="flex flex-col items-center text-sm h-full dark:bg-gray-800">
                <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full 
                    md:flex md:flex-col px-6 dark:text-gray-100">
                  <div className='text-4xl font-semibold text-center mt-6 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center'>
                    <img src="assets/images/logo.png" height={150} width={150} alt="" />
                  </div>
                  <FormTweet />
                  <ChartComponent />
                </div>
                <div className="w-full h-32 md:h-48 flex-shrink-0"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 
            md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white 
            dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
            <Footer />
          </div>
        </main>
      </div>
      <div className="dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col">
        <div className="flex h-full min-h-0 flex-col ">
          <Historial />
        </div>
      </div>
    </div>
  )
}

export default App
