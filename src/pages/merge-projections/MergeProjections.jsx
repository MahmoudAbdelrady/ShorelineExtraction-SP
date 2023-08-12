import InputField from "../../components/InputField/InputField";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./mergeprojections.css";

const MergeProjections = () => {
  return (
    <>
      <Sidebar current={"mp"} />
      <div className="merge-projections container">
        <SectionTitle title={"Merge Projections"} icon={"bi bi-intersect"} />
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
          <div className="trans-id">
            <div className="t-box">
              <InputField
                labelText={"Start Transect ID"}
                inputType={"number"}
              />
            </div>
            <div className="t-box">
              <InputField labelText={"End Transect ID"} inputType={"number"} />
            </div>
          </div>
          <div className="ep-code">
            <InputField labelText={"EPSG Code"} inputType={"text"} />
          </div>
          <div className="f-btn">
            <button className="btn btn-success" type="submit">
              Run
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MergeProjections;
