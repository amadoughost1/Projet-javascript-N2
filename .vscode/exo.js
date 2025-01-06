// 1. String Manipulation Functions

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  function countCharacters(str) {
    return str.length;
  }
  
  function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // 2. Array Functions
  
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // 3. Mathematical Functions
  
  function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function fibonacci(n) {
    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq.slice(0, n);  // Return first n terms
  }
  