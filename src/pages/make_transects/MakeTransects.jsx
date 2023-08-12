import InputField from "../../components/InputField/InputField";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./maketransects.css";

const MakeTransects = () => {
  return (
    <>
      <Sidebar current={"mt"} />
      <div className="make-transects container">
        <SectionTitle title={"Make Transects"} icon={"bi bi-alt"} />
        <form>
          <div className="alongshore-spacing">
            <InputField
              labelText={"Alongshore Spacing (m)"}
              inputType={"number"}
            />
          </div>
          <div className="cross-shore-length mt-5">
            <InputField
              labelText={"Cross-Shore Length (m)"}
              inputType={"number"}
            />
          </div>
          <div className="shoreline-shapefile mt-5">
            <span className="ss-title">Reference Shoreline Shapefile: </span>
            <label htmlFor="shf">
              <i className="bi bi-file-earmark-arrow-up me-2"></i>
              <span>Select file</span>
            </label>
            <input className="d-none" type="file" name="shf" id="shf" />
          </div>
        </form>
      </div>
    </>
  );
};

export default MakeTransects;
