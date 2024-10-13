// insertionSort.ts

export function insertionSort(arr: number[]): [number[], [number, number][]] {
    const animations: [number, number][] = [];
  
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        animations.push([j, j + 1]);
        arr[j + 1] = arr[j];
        j = j - 1;
      }
  
      arr[j + 1] = key;
    }
  
    return [arr, animations];
  }
  