import React, { useState } from "react";
import "./NavBar.css";

interface NavBarProps {
  onSelectOption: (option: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState("sort");

  const handleToggle = () => {
    const option = selectedOption === "sort" ? "search" : "sort";
    setSelectedOption(option);
    onSelectOption(option);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Algorithm Visualization</div>
        <div className="nav-menu">
          <div className="nav-item">
            <a href="#contacts" className="nav-links">
              Contacts
            </a>
          </div>
          <div className="nav-item">
            <a href="#about" className="nav-links">
              About
            </a>
          </div>
          <div className="nav-separator"></div>
          <div className="toggle-button">
            <div className="toggle-labels">
              <div className="toggle-label">Sort</div>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={selectedOption === "search"}
              />
              <span className="slider round"></span>
            </label>
            <div className="toggle-labels">
              <div className="toggle-label">Search</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
