import { lazy, Suspense } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loading from './components/Loading';

const Index = lazy(() => import("./components/Pages/Index"));
const AboutPage = lazy(() => import("./components/Pages/AboutPage"));
const BlogPage = lazy(() => import("./components/Pages/BlogPage"));
const WorkPage = lazy(() => import("./components/Pages/WorkPage"));
const MySkillsPage = lazy(() => import("./components/Pages/MySkillsPage"));
const SoundBar = lazy(() => import("./components/SoundBar"));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <SoundBar />
          <AnimatePresence exitBeforeEnter >
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/blog" element={<BlogPage />} />
              <Route exact path="/work" element={<WorkPage />} />
              <Route exact path="/skills" element={<MySkillsPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
