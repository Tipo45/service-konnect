import { useState } from "react";
import "../../components/ArtisanUserProfile/Dropdown.css";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    'Tailoring Services', 
    'Auto Repairing Services', 
    'Electrical Services', 
    'Plumbing Services', 
    'Catering Services', 
    'Building/Construction Services', 
    'Arts', 
    'Other Services'
  ];

  return (
    <div className="dropdown">
      <button
        className="dropdown-btn"
        onClick={() => setIsActive(prev => !prev)}
        aria-expanded={isActive}
        aria-haspopup="true"
      >
        {selected || 'Choose Category'} 
        <span><IoIosArrowDown /></span>
      </button>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
