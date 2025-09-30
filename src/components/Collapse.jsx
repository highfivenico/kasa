import { useState } from "react";
import arrow from "../assets/img/arrow-up.png";

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
          <img
            src={arrow}
            className={`collapse__arrow ${isOpen ? "rotated" : ""}`}
          ></img>
        </div>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
