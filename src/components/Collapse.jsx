import arrow from "../assets/img/arrow-up.png";
import { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__item">
        <div
          className={`collapse__header ${
            isOpen ? "collapse__header--active" : ""
          }`}
        >
          <h2>{title}</h2>
          <div
            className="collapse__toggle"
            onClick={(e) => {
              e.preventDefault();
              handleToggle(0);
            }}
          >
            <img
              src={arrow}
              className={`collapse__arrow ${isOpen ? "rotated" : ""}`}
            ></img>
          </div>
        </div>
        <div className="collapse__wrapper">
          <div className="collapse__content">
            <div className="collapse__inner">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
