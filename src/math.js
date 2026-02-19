function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || b === 0) return null;
  return a / b;
}

function sumArray(numbers) {
  if (!Array.isArray(numbers)) return null;
  if (numbers.length === 0) return 0;
  if (!numbers.every(n => typeof n === 'number')) return null;
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0 || !numbers.every(n => typeof n === 'number')) return null;
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}

function max(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0 || !numbers.every(n => typeof n === 'number')) return null;
  return Math.max(...numbers);
}

function min(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0 || !numbers.every(n => typeof n === 'number')) return null;
  return Math.min(...numbers);
}

function isEven(number) {
  if (typeof number !== 'number' || !Number.isInteger(number)) return null;
  return number % 2 === 0;
}

function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) return null;
  if (n === 0) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sumArray,
  average,
  max,
  min,
  isEven,
  factorial
}