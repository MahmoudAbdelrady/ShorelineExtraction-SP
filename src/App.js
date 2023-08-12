import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/footer";
import DownloadImagery from "./pages/download_imagery/DownloadImagery";
import ShorelineExtraction from "./pages/shoreline_extraction/ShorelineExtraction";
import MakeTransects from "./pages/make_transects/MakeTransects";
import MakeTimeseries from "./pages/make_timeseries/MakeTimeseries";
import GetLinearTrendShapefile from "./pages/get_lt_shapefile/GetLinearTrendShapefile";
import ProjectTimeseries from "./pages/project_timeseries/ProjectTimeseries";
import MergeProjections from "./pages/merge-projections/MergeProjections";
import RetrainingExM from "./pages/retraining-extraction-model/RetrainingExM";
function App() {
  return (
    <BrowserRouter basename="/Shoreline-GAN">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download-imagery" element={<DownloadImagery />} />
        <Route path="/shoreline-extraction" element={<ShorelineExtraction />} />
        <Route path="/make-transects" element={<MakeTransects />} />
        <Route path="/make-timeseries" element={<MakeTimeseries />} />
        <Route
          path="/get-linear-trend-shapefile"
          element={<GetLinearTrendShapefile />}
        />
        <Route path="/project-timeseries" element={<ProjectTimeseries />} />
        <Route path="/merge-projections" element={<MergeProjections />} />
        <Route
          path="/retraining-extraction-model"
          element={<RetrainingExM />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
