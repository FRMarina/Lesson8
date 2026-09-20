// Написать функцию, которая возвращает новый массив только положительных чисел, умноженный вдвое

const array: number[] = [1, -5, 7, 8, -9, 0, -4];
function getPositiveNumber(arr: number[]) {
  return arr
    .filter((e) => {
      return e >= 0;
    })
    .map((e) => {
      return e * 2;
    });
}
console.log(getPositiveNumber(array));
