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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Shoreline-GAN" element={<Home />} />
        <Route
          path="/Shoreline-GAN/download-imagery"
          element={<DownloadImagery />}
        />
        <Route
          path="/Shoreline-GAN/shoreline-extraction"
          element={<ShorelineExtraction />}
        />
        <Route
          path="/Shoreline-GAN/make-transects"
          element={<MakeTransects />}
        />
        <Route
          path="/Shoreline-GAN/make-timeseries"
          element={<MakeTimeseries />}
        />
        <Route
          path="/Shoreline-GAN/get-linear-trend-shapefile"
          element={<GetLinearTrendShapefile />}
        />
        <Route
          path="/Shoreline-GAN/project-timeseries"
          element={<ProjectTimeseries />}
        />
        <Route
          path="/Shoreline-GAN/merge-projections"
          element={<MergeProjections />}
        />
        <Route
          path="/Shoreline-GAN/retraining-extraction-model"
          element={<RetrainingExM />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
