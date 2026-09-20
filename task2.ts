// Написать функцию, которая складывает все четные числа и возвращает результат

const array: number[] = [4, 33, 45, 20, 57, 0, 2];
function count(arr: number[]): number {
  return arr.reduce((acc, value) => (value % 2 === 0 ? acc + value : acc), 0);
}
console.log(count(array));
