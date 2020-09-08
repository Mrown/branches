const isPrime = function (x) {
    for (var i = 2; i < x; i += 1) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
