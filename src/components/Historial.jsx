import React from 'react'
import useDarkMode from '../hooks/useDarkMode';


const Historial = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <aside className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
            <nav className="flex h-full flex-1 flex-col space-y-1 p-2"><a
                className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20"><svg
                    stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                    strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>New chat</a>
                <div className="flex-col flex-1 overflow-y-auto border-b border-white/20 -mr-2">
                    <div className="flex flex-col gap-2 text-gray-100 text-sm">
                        <a
                            className="flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-14 bg-gray-800 hover:bg-gray-800 group">
                            <svg
                                stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">Create
                                Footer Component - Tailwind<div
                                    className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-800">
                                </div>
                            </div>
                            <div className="absolute flex right-1 z-10 text-gray-300 visible"><button
                                className="p-1 hover:text-white"><svg stroke="currentColor" fill="none"
                                    strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 20h9"></path>
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                </svg></button><button className="p-1 hover:text-white"><svg stroke="currentColor"
                                    fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path
                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                    </path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg></button></div>
                        </a>
                        <a
                            className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">New chat
                                <div
                                    className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                </div>
                            </div>
                        </a><button className="btn flex justify-center gap-2 btn-dark btn-small m-auto mb-2">Show
                            more</button></div>
                </div><a
                    className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg
                        stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                        strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                        </path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>Clear conversations</a>
                <a onClick={toggleDarkMode}
                    className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
                    <span className="material-symbols-sharp">{isDarkMode ? 'dark_mode' : 'light_mode'}</span>
                    {isDarkMode ? 'Light mode' : 'Dark mode'}
                </a>
                <a href="https://discord.gg/openai" target="_blank"
                    className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg
                        stroke="currentColor" fill="currentColor" strokeWidth="2" viewBox="0 0 640 512"
                        className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                        </path>
                    </svg>OpenAI Discord</a>
                <a href="https://help.openai.com/en/collections/3742473-chatgpt"
                    target="_blank"
                    className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg
                        stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                        strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>Updates &amp; FAQ</a>
                <a
                    className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg
                        stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                        strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>Log out</a>
            </nav>
        </aside>
    )
}

export default Historial