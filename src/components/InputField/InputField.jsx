import "./inputfield.css";

const InputField = ({ labelText, inputType, placeHolder }) => {
  return (
    <>
      <label htmlFor="ip">{labelText}</label>
      <input
        className={inputType === "checkbox" ? "form-check-input" : ""}
        type={`${inputType}`}
        placeholder={`${placeHolder ? placeHolder : ""}`}
        name="ip"
        id="ip"
      />
    </>
  );
};

export default InputField;
