import { Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './DarkModeContext';
import NotFoundPage from '../Pages/NotFound/NotFound';
import HomePage from '../Pages/HomePage/HomePage';
import ProjectPage from '../Pages/ProjectPage/ProjectPage';
import Header from '../Header/Header';

export default function App() {
  return (
    <DarkModeProvider>
      <div className="relative text-black dark:text-white w-screen h-screen ">
        <Header className="z-10" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:path" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </DarkModeProvider>
  );
}
