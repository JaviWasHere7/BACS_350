const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter the number of terms: "));

let fibonacciSequence = (n) => {
    let list = [];
    let a = 0, b = 1, i, temp;

    for (i = 0; i < n; i++) {
        list.push(a);
        temp = a;
        a = b;
        b = temp + b;
    }

    return list;
}

console.log("Fibonacci sequence:")
console.log(fibonacciSequence(n).join('\n'));