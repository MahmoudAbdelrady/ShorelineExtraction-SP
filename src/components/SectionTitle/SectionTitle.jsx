import "./sectiontitle.css";

const SectionTitle = ({ title, icon }) => {
  return (
    <div className="section-title">
      <i className={`${icon} section-icon`}></i>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitle;
