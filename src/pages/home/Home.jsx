import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="home container">
      <Link className="sh-item" to="/download-imagery">
        <i className="bi bi-box-arrow-down shi-icon"></i>
        <span className="shi-title">Download Imagery</span>
      </Link>
      <Link className="sh-item">
        <i className="bi bi-images shi-icon"></i>
        <span className="shi-title">Preprocess Images</span>
      </Link>
      <Link className="sh-item" to="/shoreline-extraction">
        <i className="bi bi-bezier2 shi-icon"></i>
        <span className="shi-title">Shoreline Extraction</span>
      </Link>
      <Link className="sh-item" to="/make-transects">
        <i className="bi bi-alt shi-icon"></i>
        <span className="shi-title">Make Transects</span>
      </Link>
      <Link className="sh-item" to="/make-timeseries">
        <i className="bi bi-calendar4-range shi-icon"></i>
        <span className="shi-title">Make Timeseries</span>
      </Link>
      <Link className="sh-item" to="/get-linear-trend-shapefile">
        <i className="bi bi-filetype-sh shi-icon"></i>
        <span className="shi-title">Get Linear Trend Shapefile</span>
      </Link>
      <Link className="sh-item" to="/project-timeseries">
        <i className="bi bi-hourglass shi-icon"></i>
        <span className="shi-title">Project Timeseries</span>
      </Link>
      <Link className="sh-item" to="/merge-projections">
        <i className="bi bi-intersect shi-icon"></i>
        <span className="shi-title">Merge Projections</span>
      </Link>
      <Link className="sh-item" to="/retraining-extraction-model">
        <i className="bi bi-arrow-clockwise shi-icon"></i>
        <span className="shi-title">Retraining Extraction Model</span>
      </Link>
    </div>
  );
};

export default Home;
