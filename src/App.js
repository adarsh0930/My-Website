import Home from './components/Home'
import NavBar from './components/nav'
import Projects from './components/projects'
import ProjectsMobile from './components/projectsMobile'
import Experience from './components/experience'
import Contact from './components/contact'
import Footer from './components/footer'
import useDarkMode from './hooks/darkMode'
import './App.css';

export default function App() {
  const [theme, setTheme] = useDarkMode();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavBar theme={theme} setTheme={setTheme} />
        <Home id="home"/>
        <Experience id="experience"/>
        <div className="block lg:hidden">
          <ProjectsMobile />
        </div>
        <div className="hidden lg:block">
          <Projects id="projects" />   
        </div>
        <Contact id="contacts" />
        <Footer theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}