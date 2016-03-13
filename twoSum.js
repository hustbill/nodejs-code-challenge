/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var nums = [1, 2, 4, 9, 10];
var target = 13;

var twoSum = function(nums, target) {
	var result = [0, 0], map = {};
	for(var i=0; i < nums.length; i++) {
		var val = target - nums[i];
		if (typeof map[val] !== "undefined") {
			result[0] = map[val] ;
			result[1] = i ;
			return result;
		}  else {
			map[nums[i]]  = i ;
		}
	}
	return result;
}

console.log(twoSum(nums, target));

