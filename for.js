// 1st program
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("---");

// 2nd program
for (let i = 1; i <= 10; i++) {
    console.log(i + " x 2 = " + (i * 2));
}

console.log("---");

// 3rd program
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum: " + sum);

console.log("---");

// 4th program
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("---");

// 5th program
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("---");

// 6th program
let fact = 1;
for (let i = 1; i <= 5; i++) {
    fact *= i;
}
console.log("Factorial: " + fact);

console.log("---");

// 7th program
let arr = ["Apple", "Banana", "Orange", "Mango"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
