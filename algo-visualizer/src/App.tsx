import React, { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import SortAlgorithm from "./components/SortAlgorithm";
import SearchAlgorithm from "./components/SearchAlgorithm";

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("sort");

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <NavBar onSelectOption={handleSelectOption} />
      {selectedOption === "sort" ? <SortAlgorithm /> : <SearchAlgorithm />}
    </div>
  );
};

export default App;
