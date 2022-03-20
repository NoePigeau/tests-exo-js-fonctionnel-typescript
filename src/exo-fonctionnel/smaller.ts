/*
function that return the number of numbers in array that 
are smaller than arr[i] à his right
*/

export const smaller = (array: Array<number>, index: number) => array.slice(index + 1).filter((val) => val < array[index]).length;
