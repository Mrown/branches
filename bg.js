
let x = Number(prompt("enter a value"));
let start = new Date();
let b = isPrime(x);
let stop = new Date();
let elapsed = stop - start;

document.write(b,elapsed)