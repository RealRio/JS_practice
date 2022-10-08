function tailFactorial(n, total = 1) {
    if (n === 1)
        return total;
    else {
        return tailFactorial(n - 1, n * total);
    }
}
console.log(tailFactorial(5));