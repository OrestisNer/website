import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Pages/Index';
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import WorkPage from './components/Pages/WorkPage';
import MySkillsPage from './components/Pages/MySkillsPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" element={Index()} />
          <Route exact path="/about" element={AboutPage()} />
          <Route exact path="/blog" element={BlogPage()} />
          <Route exact path="/work" element={WorkPage()} />
          <Route exact path="/skills" element={MySkillsPage()} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
