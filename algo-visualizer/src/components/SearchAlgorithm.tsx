import "./Search.css";
import React, { useState, useEffect } from "react";

import Visualization from "./SearchVisualization";
import { linearSearch } from "../algorithms/search/linearSearch";
import { binarySearch } from "../algorithms/search/binarySearch";
import { generateRandomArray } from "../algorithms/utils";
import { bubbleSort } from "../algorithms/sort/bubbleSort";

const SearchAlgorithm: React.FC = () => {
  const [data, setData] = useState<number[]>([]);
  const [sortedData, setSortedData] = useState<number[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchIndex, setSearchIndex] = useState<number | null>(null);
  const [highlightedIndices, setHighlightedIndices] = useState<number[]>([]);
  const [searchInProgress, setSearchInProgress] = useState(false);

  useEffect(() => {
    handleGenerateData(); // Generate initial data
  }, []);

  const handleGenerateData = () => {
    if (searchInProgress) return; // Terminate ongoing process

    setSearchInProgress(true);
    const randomArray = generateRandomArray(10, 50);
    setData(randomArray);
    const [sortedArray] = bubbleSort([...randomArray]);
    setSortedData(sortedArray);
    setSearchIndex(null);
    setHighlightedIndices([]);
    setSearchInProgress(false);
  };

  const handleStartVisualization = async (
    searchFunction: (arr: number[], target: number) => Promise<number[]>
  ) => {
    if (searchInProgress) return; // Terminate ongoing process

    setSearchInProgress(true);
    const target = parseInt(searchValue, 10);

    const animations = await searchFunction(sortedData, target);

    for (let i = 0; i < animations.length; i++) {
      // Changed to assign an array of two numbers to the highlightedIndices prop
      setHighlightedIndices([animations[i], animations[i]]);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Adjust speed as needed
    }

    setHighlightedIndices([]);
    const index = animations[animations.length - 1];
    if (index !== -1) {
      setSearchIndex(index);
    } else {
      setSearchIndex(null);
      alert("Value not found");
    }

    setSearchInProgress(false);
  };

  return (
    <div className="algorithm-container">
      <h2>Search Algorithms</h2>
      <div className="control-panel">
        <button onClick={handleGenerateData} className="generate-data-button">
          Generate Data
        </button>
        <div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Enter value to search"
            className="search-input"
          />
          <button onClick={() => handleStartVisualization(linearSearch)}>
            Linear Search
          </button>
          <button onClick={() => handleStartVisualization(binarySearch)}>
            Binary Search
          </button>
        </div>
      </div>
      <Visualization
        data={sortedData}
        highlightedIndices={highlightedIndices}
        searchIndex={searchIndex}
      />
    </div>
  );
};

export default SearchAlgorithm;
