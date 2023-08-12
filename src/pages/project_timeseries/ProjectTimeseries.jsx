import InputField from "../../components/InputField/InputField";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./project-timeseries.css";

const ProjectTimeseries = () => {
  return (
    <>
      <Sidebar current={"pt"} />
      <div className="project-timeseries container">
        <SectionTitle title={"Project Timeseries"} icon={"bi bi-hourglass"} />
        <form>
          <div className="site-name">
            <div className="sn-box">
              <InputField labelText={"Site Name"} inputType={"text"} />
            </div>
            <div className="sn-box">
              <InputField labelText={"Starting Index"} inputType={"number"} />
            </div>
            <div className="sn-box">
              <InputField labelText={"Ending Index"} inputType={"number"} />
            </div>
          </div>
          <div className="second">
            <div className="box">
              <InputField labelText={"Epochs"} inputType={"number"} />
            </div>
            <div className="box">
              <InputField labelText={"Batch Size"} inputType={"number"} />
            </div>
            <div className="box">
              <InputField
                labelText={"Number of LSTM Layers"}
                inputType={"number"}
              />
            </div>
          </div>
          <div className="third">
            <div className="box">
              <InputField labelText={"Look-Back Value"} inputType={"number"} />
            </div>
            <div className="box">
              <InputField
                labelText={"Number of Predictions"}
                inputType={"number"}
              />
            </div>
            <div className="box">
              <InputField
                labelText={"Number of Repeats"}
                inputType={"number"}
              />
            </div>
          </div>
          <div className="last">
            <div className="training-split">
              <InputField labelText={"Training Split"} inputType={"number"} />
            </div>
            <div className="pr-freq">
              <span>Prediction Frequency:</span>
              <select>
                <option value="" disabled>
                  Select Frequency
                </option>
                <option value="monthly">Monthly</option>
                <option value="seasonally">Seasonally</option>
                <option value="biannually">Biannually</option>
                <option value="yearly">Yearly</option>
              </select>
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

export default ProjectTimeseries;
