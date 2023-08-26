import GoogleMap from "../../components/Google-Map/GoogleMap";
import "./downloadimagery.css";
import TopSidebar from "../../components/TopSidebar/TopSidebar";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Header from "../../components/Header/Header";

const DownloadImagery = () => {
  return (
    <>
      <Header />
      <div className="download-imagery">
        <div className="di-info">
          <TopSidebar />
          <form className="items">
            <InputField title={"Beginning Date:"} id={"bd"} type={"date"} />
            <InputField title={"End Date:"} id={"ed"} type={"date"} />
            <InputField title={"Name:"} id={"name"} type={"text"} />
            <InputField
              title={"Shapefile:"}
              id={"shp"}
              type={"file"}
              classes={"f-ip"}
            />
            <InputField
              title={"Shapefile Start Index:"}
              id={"si"}
              type={"number"}
            />
            <InputField
              title={"Shapefile End Index:"}
              id={"se"}
              type={"number"}
            />
            <div className="cds">
              <h3>Longitudes</h3>
              <div className="c-wrapper">
                <div className="c-box">
                  <label htmlFor="loul">Upper Left Coord:</label>
                  <input type="number" id="loul" />
                </div>
                <div className="c-box">
                  <label htmlFor="lour">Upper Right Coord:</label>
                  <input type="number" id="lour" />
                </div>
                <div className="c-box">
                  <label htmlFor="loll">Lower Left Coord:</label>
                  <input type="number" id="loll" />
                </div>
                <div className="c-box">
                  <label htmlFor="lolr">Lower Right Coord:</label>
                  <input type="number" id="lolr" />
                </div>
              </div>
            </div>
            <div className="cds">
              <h3>Latitudes</h3>
              <div className="c-wrapper">
                <div className="c-box">
                  <label htmlFor="laul">Upper Left Coord:</label>
                  <input type="number" id="laul" />
                </div>
                <div className="c-box">
                  <label htmlFor="laur">Upper Right Coord:</label>
                  <input type="number" id="laur" />
                </div>
                <div className="c-box">
                  <label htmlFor="lall">Lower Left Coord:</label>
                  <input type="number" id="lall" />
                </div>
                <div className="c-box">
                  <label htmlFor="lalr">Lower Right Coord:</label>
                  <input type="number" id="lalr" />
                </div>
              </div>
            </div>
            <div className="sats">
              <input type="checkbox" name="ss" id="s2" />
              <label htmlFor="s2" className="sat">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037704/sentinel2_eftpah.png"
                  alt="Sentinel2"
                />
                <span className="sat-title">Sentinel 2</span>
              </label>
              <input type="checkbox" name="ss" id="l5" />
              <label htmlFor="l5" className="sat">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037700/landsat5_nwztkf.png"
                  alt="Landsat5"
                />
                <span className="sat-title">Landsat 5</span>
              </label>
              <input type="checkbox" name="ss" id="l7" />
              <label htmlFor="l7" className="sat">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/landsat7_l9t76d.png"
                  alt="Landsat7"
                />
                <span className="sat-title">Landsat 7</span>
              </label>
              <input type="checkbox" name="ss" id="l8" />
              <label htmlFor="l8" className="sat">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/landsat8_hmceat.png"
                  alt="Landsat8"
                />
                <span className="sat-title">Landsat 8</span>
              </label>
            </div>
            <SubmitButton title={"Start Download"} />
          </form>
        </div>
        <GoogleMap />
      </div>
    </>
  );
};

export default DownloadImagery;
