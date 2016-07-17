function sortTransformedArray(nums, a, b, c) {
    var arr = nums.map(n => a * n * n + b * n + c);
    console.log(arr);
    console.log(arr.slice(-1));

    var offset = a ? c - (b * b) / (4 * a) : Math.min(arr[0], arr.slice(-1)[0]);
    var res = [];

    for (var l = 0, r = arr.length - 1; l <= r;) {
        if (Math.abs(arr[l] - offset) >= Math.abs(arr[r] - offset)) {
            res.push(arr[l++]);
        } else {
            res.push(arr[r--]);
        }
    }

    return res[0] > res[res.length - 1] ? res.reverse() : res;
}


var nums = [-4, -2, 2, 4];

var a = 1, b = 3, c = 5;

var result = sortTransformedArray(nums, a, b, c);
console.log("result = " + result);