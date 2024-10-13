import "./Sort.css"; // Import the CSS
import React, { useState } from "react";

import Visualization from "./SortVisualization";
import { bubbleSort } from "../algorithms/sort/bubbleSort";
import { insertionSort } from "../algorithms/sort/insertionSort";
import { selectionSort } from "../algorithms/sort/selectionSort";
import { mergeSort } from "../algorithms/sort/mergeSort";
import { generateRandomArray } from "../algorithms/utils";

const SortAlgorithm: React.FC = () => {
  const [data, setData] = useState(generateRandomArray(20, 50));
  const [highlightedIndices, setHighlightedIndices] = useState<
    [number, number] | null
  >(null);

  const handleGenerateData = () => {
    setData(generateRandomArray(20, 50));
    setHighlightedIndices(null);
  };

  const visualizeSort = async (
    sortingFunction: (
      arr: number[]
    ) => [number[], [number, number][]] | [number[], [number, number, number][]]
  ) => {
    const [sortedArray, animations] = sortingFunction([...data]);

    for (let i = 0; i < animations.length; i++) {
      if (animations[i].length === 2) {
        setHighlightedIndices(animations[i] as [number, number]);
      } else {
        const [index1, index2, index3] = animations[i] as [
          number,
          number,
          number
        ];
        setHighlightedIndices([index1, index2]);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust speed as needed
        setHighlightedIndices([index2, index3]);
      }
      setData([...sortedArray]);
    }

    setHighlightedIndices(null);
  };

  return (
    <div className="algorithm-container">
      <h2>Sort Algorithms</h2>
      <div className="control-panel">
        <button onClick={handleGenerateData} className="generate-data-button">
          Generate Data
        </button>
        <div>
          <button
            onClick={() => visualizeSort(bubbleSort)}
            className="sort-button"
          >
            Bubble Sort
          </button>
          <button
            onClick={() => visualizeSort(insertionSort)}
            className="sort-button"
          >
            Insertion Sort
          </button>
          <button
            onClick={() => visualizeSort(selectionSort)}
            className="sort-button"
          >
            Selection Sort
          </button>
          <button
            onClick={() => visualizeSort(mergeSort)}
            className="sort-button"
          >
            Merge Sort
          </button>
        </div>
      </div>
      <div className="visualization-container">
        <div className="bar-container">
          {data.map((value, index) => (
            <div
              key={index}
              className={`bar ${
                highlightedIndices &&
                (index === highlightedIndices[0] ||
                  index === highlightedIndices[1])
                  ? "highlighted"
                  : ""
              }`}
              style={{ height: `${value * 5}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortAlgorithm;
