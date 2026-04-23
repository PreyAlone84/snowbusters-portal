import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CamerasPage } from "./pages/CamerasPage";
import { ChannelsPage } from "./pages/ChannelsPage";
import { TricksPage } from "./pages/TricksPage";
import { TrickDetailPage } from "./pages/TrickDetailPage";
import { CommunityPage } from "./pages/CommunityPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cameras" element={<CamerasPage />} />
        <Route path="/channels" element={<ChannelsPage />} />
        <Route path="/tricks" element={<TricksPage />} />
        <Route path="/tricks/:id" element={<TrickDetailPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
