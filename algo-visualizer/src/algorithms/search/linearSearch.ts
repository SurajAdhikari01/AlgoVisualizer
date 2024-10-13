export async function linearSearch(arr: number[], target: number): Promise<number[]> {
  const animations: number[] = [];

  for (let i = 0; i < arr.length; i++) {
      animations.push(i);

      if (arr[i] === target) {
          animations.push(i);
          return animations;
      }
  }

  animations.push(-1); // If not found
  return animations;
}
