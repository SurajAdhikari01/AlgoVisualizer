import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

interface AlgorithmProps {
  algorithm: any;
  input: any[];
  onSolve: (solution: any) => void;
}

const Algorithm: React.FC<AlgorithmProps> = ({ algorithm, input, onSolve }) => {
  const [solution, setSolution] = useState<any>(null);

  const runAlgorithm = () => {
    const result = algorithm(input);
    setSolution(result);
    onSolve(result);
  };

  return (
    <div>
      <button onClick={runAlgorithm} className="run-button">
        Solve
      </button>
      <div className="solution-text">Solution: {solution}</div>
    </div>
  );
};

export default Algorithm;
