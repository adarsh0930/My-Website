import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Footer = ({ theme, setTheme }) => {
  return (
    <footer className={`p-8 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        <a href="#home"> 
            <img src="/logo.png" alt="Logo" className="w-16 mb-4 rounded-full bg-transparent" />
        </a>
        <div className="flex flex-col items-start mb-4 md:mb-0 text-xl space-y-0 md:space-y-1">
          <p>I'm Adarsh Singh – a full-stack developer,</p>
          <p>freelancer, javaScript-expert & problem solver.</p> 
          <p>Thanks for checking out my site!</p>
        </div>

        <nav className="flex flex-col items-center justidy-center space-y-1">
            <h4 className="underline mb-2">Quick Links</h4>
            <a href="#home" className="hover:underline hover:text-teal-500"><p>Home</p></a>
            <a href="#experience" className="hover:underline hover:text-teal-500"><p>Work</p></a>
            <a href="#projects" className="hover:underline hover:text-teal-500"><p>Projects</p></a>
            <a href="#contacts" className="hover:underline hover:text-teal-500"><p>Contact</p></a>
        </nav>

        
        <div className="flex flex-col items-center space-y-10 md:space-y-6 md:space-x-4">

            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="
                p-2 rounded-full
                text-black/70 dark:text-white/70
                hover:bg-black/10 dark:hover:bg-white/10
                transition
                "
                aria-label="Toggle dark mode"
                >
                {theme === "dark" ? <FiSun size={30} /> : <FiMoon size={30} />}
            </button>

            <h4 className="underline mb-1">Connect</h4>
                


            <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://www.linkedin.com/in/adarshsingh0930" target="_blank" rel="noreferrer" className="h-10 w-10 hover:-translate-y-2">
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-[32px] h-[32px]">
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                        <path d="M7 7h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="currentColor"/>
                        <rect x="11" y="11" width="2" height="6" rx="1" fill="currentColor"/>
                        <path d="M14 11a2 2 0 1 1 4 0v6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </a>
                <a href="https://github.com/adarsh0930" target="_blank" rel="noreferrer" className="h-10 w-10 hover:-translate-y-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="50"
                        height="50"
                        fill="currentColor"
                        >
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2 
                            .37-.5 1.11-1.66 1.11c-1 0-1.82-.68-2.12-1.63c-.21-.54-.72-.63-.72-.63c-.59-.4.05-.39.05-.39c.65.05 
                            1 .67 1 .67c.58 1 1.52.72 1.89.55c.06-.42.23-.72.42-.88c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15 
                            c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.03 2.2-.82 
                            2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.24.21.45.62.45 
                            1.25c0 .9-.01 1.63-.01 1.85c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                        />
                    </svg>
                </a>
                <a href="mailto:adarshsingh0930@gmail.com" target="_blank" rel="noreferrer" className="h-10 w-10 hover:-translate-y-2">
                    <svg viewBox="0 0 24 24" fill="none" className="w-[32px] h-[32px]">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M3 7l9 7 9-7" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </a>
            </div>
        </div>
      </div>
        <div className="mt-4 md:-mt-10">&copy; 2025 Adarsh Singh</div>
    </footer>
  );
};

export default Footer;