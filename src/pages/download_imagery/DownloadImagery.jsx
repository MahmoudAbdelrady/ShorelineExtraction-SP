import InputField from "../../components/InputField/InputField";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./downloadimagery.css";
const DownloadImagery = () => {
  return (
    <>
      <Sidebar current={"di"} />
      <div className="downloadimagery container">
        <SectionTitle
          title={"Download Imagery"}
          icon={"bi bi-box-arrow-down"}
        />
        <form>
          <div className="file-info">
            <h3>File Info</h3>
            <div className="fn-chk">
              <div className="fname">
                <InputField labelText={"Name"} inputType={"text"} />
              </div>
              <div className="box">
                <InputField
                  labelText={"Shapefile Input"}
                  inputType={"checkbox"}
                />
              </div>
            </div>
            <div className="fconfig">
              <div className="shs-box">
                <InputField
                  labelText={"Shapefile Start Index"}
                  inputType={"number"}
                />
              </div>
              <div className="she-box">
                <InputField
                  labelText={"Shapefile End Index"}
                  inputType={"number"}
                />
              </div>
            </div>
          </div>
          <div className="timeseries">
            <h3>Time Series</h3>
            <div className="dates">
              <div className="bgd-box">
                <InputField labelText={"Beginning Date"} inputType={"date"} />
              </div>
              <div className="end-box">
                <InputField labelText={"End Date"} inputType={"date"} />
              </div>
            </div>
          </div>
          <div className="long">
            <h3>Longitudes</h3>
            <div className="upper">
              <div className="box">
                <InputField
                  labelText={"Upper Left Coord"}
                  inputType={"text"}
                  placeHolder={"Decimal Degrees"}
                />
              </div>
              <div className="box">
                <InputField
                  labelText={"Upper Right Coord"}
                  inputType={"text"}
                  placeHolder={"Decimal Degrees"}
                />
              </div>
            </div>
            <div className="lower">
              <div className="box">
                <InputField
                  labelText={"Lower Left Coord"}
                  inputType={"text"}
                  placeHolder={"Decimal Degrees"}
                />
              </div>
              <div className="box">
                <InputField
                  labelText={"Lower Right Coord"}
                  inputType={"text"}
                  placeHolder={"Decimal Degrees"}
                />
              </div>
            </div>
          </div>
          <div className="lat">
            <h3>Latitudes</h3>
            <div className="upper">
              <div className="box">
                <InputField
                  labelText={"Upper Left Coord"}
                  inputType={"text"}
                  placeHolder={"Decimal Degrees"}
                />
              </div>
              <div className="box">
                <InputField
                  labelText={"Upper Right Coord"}
                  inputType={"text"}
                  placeHolder={"Decimal Degrees"}
                />
              </div>
            </div>
            <div className="lower">
              <div className="box">
                <InputField
                  labelText={"Lower Left Coord"}
                  inputType={"text"}
                  placeHolder={"Decimal Degrees"}
                />
              </div>
              <div className="box">
                <InputField
                  labelText={"Lower Right Coord"}
                  inputType={"text"}
                  placeHolder={"Decimal Degrees"}
                />
              </div>
            </div>
          </div>
          <div className="satellites">
            <h3>Satellites</h3>
            <div className="checkboxes">
              <div className="box">
                <InputField labelText={"Sentinel 2"} inputType={"checkbox"} />
              </div>
              <div className="box">
                <InputField labelText={"Landsat 5"} inputType={"checkbox"} />
              </div>
              <div className="box">
                <InputField labelText={"Landsat 7"} inputType={"checkbox"} />
              </div>
              <div className="box">
                <InputField labelText={"Landsat 8"} inputType={"checkbox"} />
              </div>
            </div>
          </div>
          <button className="btn btn-success mb-3 f-btn" type="submit">
            Start Download
          </button>
        </form>
      </div>
    </>
  );
};

export default DownloadImagery;
