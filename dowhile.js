// Program 1: Print numbers 1 to 5
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

console.log("---");

// Program 2: Print table of 3
let num = 3;
let j = 1;
do {
    console.log(num + " x " + j + " = " + (num * j));
    j++;
} while (j <= 5);

console.log("---");

// Program 3: Sum of 1 to 10
let sum = 0;
let k = 1;
do {
    sum += k;
    k++;
} while (k <= 10);
console.log("Sum 1 to 10: " + sum);

console.log("---");

// Program 4: Countdown from 10 to 1
let count = 10;
do {
    console.log(count);
    count--;
} while (count >= 1);

console.log("---");

// Program 5: Print odd numbers from 1 to 9
let odd = 1;
do {
    console.log(odd);
    odd += 2;
} while (odd <= 9);

console.log("---");

// Program 6: Factorial of 4
let fact = 1;
let n = 4;
let m = 1;
do {
    fact *= m;
    m++;
} while (m <= n);
console.log("Factorial of 4: " + fact);

console.log("---");

// Program 7: Print same string 4 times
let times = 1;
do {
    console.log("Hello World");
    times++;
} while (times <= 4);
