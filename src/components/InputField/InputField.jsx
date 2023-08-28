import "./inputfield.css";

const InputField = ({ title, id, type, placeholder, classes }) => {
  return (
    <div className={`input-field ${classes}`}>
      {type === "file" ? (
        <>
          <span>{title}</span>
          <label htmlFor={id}>
            <i className="bi bi-file-earmark-arrow-up"></i>
            <span>Upload</span>
          </label>
          <input type={type} id={id} />
        </>
      ) : (
        <>
          <label htmlFor={id}>{title}</label>
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className={`${type === "checkbox" ? "form-check-input" : ""}`}
          />
        </>
      )}
    </div>
  );
};

export default InputField;
