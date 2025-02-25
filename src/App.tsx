import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import NeoBrutalist from "./pages/NeoBrutalist/NeoBrutalist";
import IndustrialGrunge from "./pages/IndustrialGrunge/IndustrialGrunge";
import DigitalDistortion from "./pages/DigitalDistortion/DigitalDistortion";
import ConcreteModernism from "./pages/ConcreteModernism/ConcreteModernism";
import PunkRevival from "./pages/PunkRevival/PunkRevival";
import TechConstructivism from "./pages/TechConstructivism/TechConstructivism";
import VaporDimension from "./pages/VaporDimension/VaporDimension";
import DataMaximalism from "./pages/DataMaximalism/DataMaximalism";
import AnalogGlitch from "./pages/AnalogGlitch/AnalogGlitch";
import KineticTypography from "./pages/KineticTypography/KineticTypography";
import LiquidBrutalism from "./pages/LiquidBrutalism/LiquidBrutalism";
import TypeChaos from "./pages/TypeChaos/TypeChaos";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/neo-brutalist" element={<NeoBrutalist />} />
        <Route path="/industrial-grunge" element={<IndustrialGrunge />} />
        <Route path="/digital-distortion" element={<DigitalDistortion />} />
        <Route path="/concrete-modernism" element={<ConcreteModernism />} />
        <Route path="/punk-revival" element={<PunkRevival />} />
        <Route path="/tech-constructivism" element={<TechConstructivism />} />
        <Route path="/vapor-dimension" element={<VaporDimension />} />
        <Route path="/data-maximalism" element={<DataMaximalism />} />
        <Route path="/analog-glitch" element={<AnalogGlitch />} />
        <Route path="/kinetic-typography" element={<KineticTypography />} />
        <Route path="/liquid-brutalism" element={<LiquidBrutalism />} />
        <Route path="/type-chaos" element={<TypeChaos />} />
      </Routes>
    </Layout>
  );
}

export default App;
