export async function binarySearch(arr: number[], target: number): Promise<number[]> {

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  const animations: number[] = [];
  let left = 0;
  let right = arr.length - 1;

  

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      animations.push(mid);

      if (arr[mid] === target) {
          animations.push(mid);
          return animations;
      }

      if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  animations.push(-1); // If not found
  return animations;
  
}
