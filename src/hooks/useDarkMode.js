import { useEffect, useState } from 'react'

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('isDarkMode') === 'true'
    );

    useEffect(() => {
        const root = window.document.documentElement
        if (!isDarkMode) {
            root.classList.remove('dark')
        } else {
            root.classList.add('dark')
        }

        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return { isDarkMode, toggleDarkMode };
};

export default useDarkMode