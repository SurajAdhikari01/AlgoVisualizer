// utils.ts

export function generateRandomArray(length: number, maxNumber: number): number[] {
    return Array.from({ length }, () => Math.floor(Math.random() * maxNumber) + 1);
  }
  