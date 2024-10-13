// selectionSort.ts

export function selectionSort(arr: number[]): [number[], [number, number][]] {
    const animations: [number, number][] = [];
  
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      animations.push([i, minIndex]);
  
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  
    return [arr, animations];
  }
  