import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { CamerasPage } from './pages/CamerasPage';
import { ChannelsPage } from './pages/ChannelsPage';
import { TricksPage } from './pages/TricksPage';
import { TrickDetailPage } from './pages/TrickDetailPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CamerasPage />} />
        <Route path="/channels" element={<ChannelsPage />} />
        <Route path="/tricks" element={<TricksPage />} />
        <Route path="/tricks/:id" element={<TrickDetailPage />} />
      </Routes>
    </Layout>
  );
}

export default App;