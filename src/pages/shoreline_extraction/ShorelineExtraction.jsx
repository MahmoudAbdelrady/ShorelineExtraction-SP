import InputField from "../../components/InputField/InputField";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./shorelineextraction.css";

const ShorelineExtraction = () => {
  return (
    <>
      <Sidebar current={"se"} />
      <div className="shoreline-extraction container">
        <SectionTitle title={"Shoreline Extraction"} icon={"bi bi-bezier2"} />
        <form>
          <div className="name-info">
            <div className="ni-box">
              <InputField labelText={"Model Name"} inputType={"text"} />
            </div>
            <div className="ni-box">
              <InputField labelText={"Site Name"} inputType={"text"} />
            </div>
            <div className="ni-box">
              <InputField labelText={"Epoch"} inputType={"text"} />
            </div>
          </div>
          <div className="clip-length">
            <div className="cl-box">
              <InputField labelText={"Clip Length"} inputType={"number"} />
            </div>
            <div className="cl-box">
              <InputField
                labelText={"Use Reference Shoreline"}
                inputType={"checkbox"}
              />
            </div>
            <div className="cl-box">
              <InputField
                labelText={"Use Reference Region"}
                inputType={"checkbox"}
              />
            </div>
          </div>
          <div className="distance">
            <InputField
              labelText={"Distance Threshold for Reference Shoreline Filter"}
              inputType={"number"}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <button className="btn btn-success p-3 fs-6" type="submit">
              Run and Process
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ShorelineExtraction;
