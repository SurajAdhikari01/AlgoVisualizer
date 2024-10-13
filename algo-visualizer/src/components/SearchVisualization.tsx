// Visualization.tsx
import "./Search.css";
import React from "react";

interface VisualizationProps {
  data: number[];
  highlightedIndices: number[] | null;
  searchIndex: number | null;
}

const Visualization: React.FC<VisualizationProps> = ({
  data,
  highlightedIndices,
  searchIndex,
}) => {
  return (
    <div className="visualization-container">
      {data.map((value, index) => (
        <div
          key={index}
          className={`box ${
            highlightedIndices &&
            (index === highlightedIndices[0] || index === highlightedIndices[1])
              ? "highlighted"
              : ""
          } ${searchIndex !== null && index === searchIndex ? "search" : ""}`}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Visualization;
