import React from 'react';

const Footer = () => (
    <footer className="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
        <p class="text-center">&copy; 2023 Hackathon Web</p>
        <div class="flex justify-center mt-4">
            <p class="mr-4">Contacto: <a href="mailto:contacto@hackathonweb.com" class="text-indigo-500 hover:underline">contacto@hackathonweb.com</a></p>
            <p>Redes:
                <a href="https://twitter.com/hackathonweb" class="text-indigo-500 hover:underline mx-2">Twitter</a> |
                <a href="https://facebook.com/hackathonweb" class="text-indigo-500 hover:underline">Facebook</a>
            </p>
        </div>
    </footer>
);

export default Footer;