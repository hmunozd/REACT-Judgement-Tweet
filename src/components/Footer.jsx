import React from 'react';

const Footer = () => (
    <footer className="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
        <p className="text-center">&copy; 2023 Hackathon Midudev - Powered by Cohere</p>
        <div className="flex justify-center mt-4">
            <p className="mr-4">Desarrollador por: Yaider - Hildefonso</p>
            <p>
                <a href="https://github.com/hmunozd/REACT-Judgement-Tweet" className="text-indigo-500 hover:underline mx-2">Github</a>
            </p>
        </div>
    </footer>
);

export default Footer;