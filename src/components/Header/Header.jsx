import "./header.css";
import { Link } from "react-router-dom";
const Header = ({ idx }) => {
  return (
    <div className="header">
      <div className="left-section">
        <div className="logos">
          <img
            src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/logo1_yowyjq.png"
            alt="Logo1"
          />
          <img
            src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/logo2_bivga8.png"
            alt="Logo2"
          />
        </div>
        <div className="site-name">
          National Authority for Remote Sensing & Space Sciences
        </div>
      </div>
      <div className="middle-section">Shoreline Extraction Summer Project</div>
      <div className="right-section">
        <ul className="links">
          <li>
            <Link to="/" className={idx === 1 ? "active" : ""}>
              <i className="bi bi-house-fill"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/stats-analysis" className={idx === 2 ? "active" : ""}>
              <i className="bi bi-graph-down"></i>
              <span>Statistical Analysis</span>
            </Link>
          </li>
          <li>
            <Link to="/about-us" className={idx === 3 ? "active" : ""}>
              <i className="bi bi-people-fill"></i>
              <span>About Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
