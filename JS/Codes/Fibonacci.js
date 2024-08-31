let fibonacciSequence = (n) => {
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}
console.log("Fibonacci(0): " + fibonacciSequence(0));
console.log("Fibonacci(1): " + fibonacciSequence(1));
console.log("Fibonacci(2): " + fibonacciSequence(2));
console.log("Fibonacci(3): " + fibonacciSequence(3));
console.log("Fibonacci(4): " + fibonacciSequence(4));
console.log("Fibonacci(5): " + fibonacciSequence(5));
console.log("Fibonacci(6): " + fibonacciSequence(6));
console.log("Fibonacci(7): " + fibonacciSequence(7));
console.log("Fibonacci(8): " + fibonacciSequence(8));