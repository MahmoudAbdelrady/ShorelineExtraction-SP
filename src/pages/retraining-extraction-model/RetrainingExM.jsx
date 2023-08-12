import InputField from "../../components/InputField/InputField";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./retrainingexm.css";

const RetrainingExM = () => {
  return (
    <>
      <Sidebar current={"rem"} />
      <div className="retraining-exm container">
        <SectionTitle
          title={"Retraining Extraction Model"}
          icon={"bi bi-arrow-clockwise"}
        />
        <form>
          <div className="mname">
            <InputField labelText={"Model Name"} inputType={"text"} />
          </div>
          <div className="epochs">
            <div className="ep-box">
              <InputField labelText={"Epochs"} inputType={"number"} />
            </div>
            <div className="ep-box">
              <label htmlFor="dep">Decay Epochs</label>
              <input type="number" name="dep" id="dep" />
            </div>
          </div>
          <div className="con-train">
            <div className="ct-box">
              <InputField
                labelText={"Continue Training"}
                inputType={"checkbox"}
              />
            </div>
            <div className="ct-box">
              <InputField
                labelText={"Continue Training at Epoch #"}
                inputType={"text"}
              />
            </div>
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

export default RetrainingExM;
