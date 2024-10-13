// bubbleSort.ts

export function bubbleSort(arr: number[]): [number[], [number, number][]] {
    const animations: [number, number][] = [];
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          animations.push([j, j + 1]);
          
        }
      }
    }
  
    return [arr, animations];
  }
  