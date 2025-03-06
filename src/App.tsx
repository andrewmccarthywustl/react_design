import { Route, Routes } from "react-router-dom";
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
import MinimalistDesign from "./pages/MinimalistDesign/MinimalistDesign";
import RetroBrutalist from "./pages/RetroBrutalist/RetroBrutalist";
import LiquidMotion from "./pages/LiquidMotion/LiquidMotion";
import CurvedLines from "./pages/CurvedLines/CurvedLines";
import SkeletalPerformance from "./pages/SkeletalPerformance/SkeletalPerformance";
import GeometricStructure from "./pages/GeometricStructure/GeometricStructure";
import HokusaiWave from "./pages/HokusaiWave/HokusaiWave";
import AnimatedShapes from "./pages/AnimatedShapes/AnimatedShapes";
import DeepBlue from "./pages/DeepBlue/DeepBlue";
import Mononoke from "./pages/Mononoke/Mononoke";
import Syth from "./pages/Syth/Syth";
import DesignSystem from "./pages/DesignSystem/DesignSystem";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CurvedModernism from "./pages/CurvedModernism/CurvedModernism";
import Syth2 from "./pages/Syth2/Syth2";
import MidCenturyConstructivism from "./pages/MidCenturyConstructivism/MidCenturyConstructivism";

function App() {
  return (
    <Layout>
      <ScrollToTop />
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
        <Route path="/retro-brutalist" element={<RetroBrutalist />} />
        <Route path="/minimalist-design" element={<MinimalistDesign />} />
        <Route path="/liquid-motion" element={<LiquidMotion />} />
        <Route path="/curved-lines" element={<CurvedLines />} />
        <Route path="/skeletal-performance" element={<SkeletalPerformance />} />
        <Route path="/geometric-structure" element={<GeometricStructure />} />
        <Route path="/hokusai-wave" element={<HokusaiWave />} />
        <Route path="/animated-shapes" element={<AnimatedShapes />} />
        <Route path="/deep-blue" element={<DeepBlue />} />
        <Route path="/mononoke" element={<Mononoke />} />
        <Route path="/syth" element={<Syth />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/curved-modernism" element={<CurvedModernism />} />
        <Route path="/syth2" element={<Syth2 />} />
        <Route
          path="/mid-century-constructivism"
          element={<MidCenturyConstructivism />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
