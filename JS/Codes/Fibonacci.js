let fibonacciSequence = (n) => {
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}
console.log("Fibonacci(5): " + fibonacciSequence(5));
console.log("Fibonacci(8): " + fibonacciSequence(8));