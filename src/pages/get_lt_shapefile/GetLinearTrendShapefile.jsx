import InputField from "../../components/InputField/InputField";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./getlineartrendshapefile.css";

const GetLinearTrendShapefile = () => {
  return (
    <>
      <Sidebar current={"glts"} />
      <div className="get-lt-sh container">
        <SectionTitle
          title={"Get Linear Trend Shapefile"}
          icon={"bi bi-filetype-sh"}
        />
        <form>
          <div className="first">
            <InputField labelText={"Site Name"} inputType={"text"} />
          </div>
          <div className="second">
            <div className="box">
              <InputField labelText={"Minimum Year"} inputType={"number"} />
            </div>
            <div className="box">
              <InputField labelText={"Maximum Year"} inputType={"number"} />
            </div>
            <div className="box">
              <InputField labelText={"EPSG Code"} inputType={"text"} />
            </div>
          </div>
          <div className="f-btn mt-5">
            <button className="btn btn-success p-3" type="submit">
              Make Linear Trends Shapefile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetLinearTrendShapefile;
