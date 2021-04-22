function fib(n) {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b);
    }

    return result[n];
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return slowFib(n - 1) + slowFib(n - 2);
}

slowFib = memoize(slowFib);

// memoization
function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function recFib(n) {
    if (n < 2) {
        return n;
    }
    return recFib(n - 1) + recFib(n - 2);
}

module.exports = fib(3);