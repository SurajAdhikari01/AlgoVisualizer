// mergeSort.ts

export function mergeSort(arr: number[]): [number[], [number, number][]] {
    const animations: [number, number][] = [];
    
    function merge(left: number[], right: number[]): number[] {
      const result: number[] = [];
  
      while (left.length && right.length) {
        const leftIndex = arr.indexOf(left[0]);
        const rightIndex = arr.indexOf(right[0]);
  
        animations.push([leftIndex, rightIndex]);
  
        if (left[0] <= right[0]) {
          result.push(left.shift()!);
        } else {
          result.push(right.shift()!);
        }
      }
  
      while (left.length) {
        const leftIndex = arr.indexOf(left[0]);
        animations.push([leftIndex, leftIndex + result.length]);
        result.push(left.shift()!);
      }
  
      while (right.length) {
        const rightIndex = arr.indexOf(right[0]);
        animations.push([rightIndex, rightIndex + result.length]);
        result.push(right.shift()!);
      }
  
      return result;
    }
  
    function sort(arr: number[]): number[] {
      if (arr.length <= 1) return arr;
  
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
  
      return merge(sort(left), sort(right));
    }
  
    const sortedArray = sort(arr.slice()); // Make a copy to avoid modifying the original array
  
    return [sortedArray, animations];
  }
  