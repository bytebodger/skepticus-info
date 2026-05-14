import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CounterApologeticsPage } from './pages/CounterApologeticsPage';
import { DashboardPage } from './pages/DashboardPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ResearchBriefsPage } from './pages/ResearchBriefsPage';
import { SourceLibraryPage } from './pages/SourceLibraryPage';
import { StreamToolkitPage } from './pages/StreamToolkitPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/counter-apologetics" element={<CounterApologeticsPage />} />
        <Route path="/research-briefs" element={<ResearchBriefsPage />} />
        <Route path="/source-library" element={<SourceLibraryPage />} />
        <Route path="/stream-toolkit" element={<StreamToolkitPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
