// Visualization.tsx
import "./Sort.css"; // Import the CSS file
import React from "react";

interface VisualizationProps {
  data: number[];
  highlightedIndices: [number, number] | null;
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
          style={{ height: `${value * 5}px` }}
        />
      ))}
    </div>
  );
};

export default Visualization;
