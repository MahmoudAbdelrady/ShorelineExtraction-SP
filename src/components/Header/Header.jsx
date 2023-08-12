import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="h-link">
        <img src="./images/satellite.png" alt="Logo" />
        <span className="title">Shoreline GAN</span>
      </Link>
    </div>
  );
};

export default Header;
