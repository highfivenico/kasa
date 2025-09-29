import { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header">
        <h2>{title}</h2>
        <div className="collapse__toggle" onClick={toggleCollapse}>
          <i
            className={`collapse__icon fa-solid fa-angle-up ${
              isOpen ? "rotated" : ""
            }`}
          ></i>
        </div>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
