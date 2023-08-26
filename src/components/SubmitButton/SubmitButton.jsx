import "./submitbutton.css";

const SubmitButton = ({ title }) => {
  return (
    <div className="submit-btn">
      <button className="btn btn-success" type="submit">
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;
