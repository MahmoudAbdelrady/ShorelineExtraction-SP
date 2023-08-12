import { Link } from "react-router-dom";
import { useState } from "react";
import "./sidebar.css";

const Sidebar = ({ current }) => {
  var [sideBar, setSideBar] = useState(false);
  return (
    <div className={`sidebar ${sideBar}`}>
      <div
        onClick={() => setSideBar((prev) => !prev)}
        className="toggle-sidebar"
      >
        <i
          className={`${
            sideBar ? "bi bi-caret-left-fill" : "bi bi-caret-right-fill"
          }`}
        ></i>
      </div>
      <div className="sb-container">
        <div className="sb-header">
          <span>Menu</span>
        </div>
        <div className="content">
          <Link
            onClick={() => setSideBar(false)}
            className={`sh-item ${current === "home" ? "active" : ""}`}
            to="/"
          >
            <i className="bi bi-house-fill shi-icon"></i>
            <span>Home</span>
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className={`sh-item ${current === "di" ? "active" : ""}`}
            to="/download-imagery"
          >
            <i className="bi bi-box-arrow-down shi-icon"></i>
            <span className="shi-title">Download Imagery</span>
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className={`sh-item ${current === "pi" ? "active" : ""}`}
          >
            <i className="bi bi-images shi-icon"></i>
            <span className="shi-title">Preprocess Images</span>
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className={`sh-item ${current === "se" ? "active" : ""}`}
            to="/shoreline-extraction"
          >
            <i className="bi bi-bezier2 shi-icon"></i>
            <span className="shi-title">Shoreline Extraction</span>
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className={`sh-item ${current === "mt" ? "active" : ""}`}
            to="/make-transects"
          >
            <i className="bi bi-alt shi-icon"></i>
            <span className="shi-title">Make Transects</span>
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className={`sh-item ${current === "mti" ? "active" : ""}`}
            to="/make-timeseries"
          >
            <i className="bi bi-calendar4-range shi-icon"></i>
            <span className="shi-title">Make Timeseries</span>
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className={`sh-item ${current === "glts" ? "active" : ""}`}
            to="/get-linear-trend-shapefile"
          >
            <i className="bi bi-filetype-sh shi-icon"></i>
            <span className="shi-title">Get Linear Trend Shapefile</span>
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className={`sh-item ${current === "pt" ? "active" : ""}`}
            to="/project-timeseries"
          >
            <i className="bi bi-hourglass shi-icon"></i>
            <span className="shi-title">Project Timeseries</span>
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className={`sh-item ${current === "mp" ? "active" : ""}`}
            to="/merge-projections"
          >
            <i className="bi bi-intersect shi-icon"></i>
            <span className="shi-title">Merge Projections</span>
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className={`sh-item ${current === "rem" ? "active" : ""}`}
            to="/retraining-extraction-model"
          >
            <i className="bi bi-arrow-clockwise shi-icon"></i>
            <span className="shi-title">Retraining Extraction Model</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
