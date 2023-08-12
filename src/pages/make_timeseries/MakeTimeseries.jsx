import InputField from "../../components/InputField/InputField";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./maketimeseries.css";

const MakeTimeseries = () => {
  return (
    <>
      <Sidebar current={"mti"} />
      <div className="make-timeseries container">
        <SectionTitle
          title={"Make Timeseries"}
          icon={"bi bi-calendar4-range"}
        />
        <form>
          <div className="first">
            <div className="f-box">
              <InputField labelText={"Site Name"} inputType={"text"} />
            </div>
            <div className="f-box">
              <InputField
                labelText={"Switch Transect Direction"}
                inputType={"checkbox"}
              />
            </div>
          </div>
          <div className="second mt-5">
            <InputField labelText={"Starting Index"} inputType={"number"} />
          </div>
          <div className="f-btn mt-5">
            <button className="btn btn-success p-3" type="submit">
              Create Timeseries
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MakeTimeseries;
