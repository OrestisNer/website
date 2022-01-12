import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Theme';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from './components/Pages/Index';
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import WorkPage from './components/Pages/WorkPage';
import MySkillsPage from './components/Pages/MySkillsPage';
import SoundBar from './components/SoundBar';

function App() {
  // const location = useLocation();
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter >
          <Routes /*location={location} key={location.pathname} */>
            <Route exact path="/" element={Index()} />
            <Route exact path="/about" element={AboutPage()} />
            <Route exact path="/blog" element={BlogPage()} />
            <Route exact path="/work" element={WorkPage()} />
            <Route exact path="/skills" element={MySkillsPage()} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
