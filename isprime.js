const isPrime = function (x) {
    for (var i = 3; i < x; i += 2) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
