import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" element={Main()} />
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
