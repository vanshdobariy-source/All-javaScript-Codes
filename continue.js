// Program 1: Skip number 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
console.log("----")

// Program 2: Skip even numbers
for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
console.log("----")

// Program 3: Skip number 5
let i = 1;
while (i <= 7) {
    i++;
    if (i === 5) {
        continue;
    }
    console.log(i);
}
console.log("----")

// Program 4: Skip negative numbers
let arr = [1, -2, 3, -4, 5];
for (let x of arr) {
    if (x < 0) {
        continue;
    }
    console.log(x);
}
console.log("----")

// Program 5: Skip vowels
let str = "hello";
for (let ch of str) {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        continue;
    }
    console.log(ch);
}
console.log("----")


// Program 6: Skip multiples of 3
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
console.log("----")

// Program 7: Skip number greater than 5
for (let i = 1; i <= 8; i++) {
    if (i > 5) {
        continue;
    }
    console.log(i);
}
