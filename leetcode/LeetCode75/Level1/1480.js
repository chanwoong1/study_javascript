var runningSum = function (nums) {
  var ret = new Array(nums.length); // create new Array
  for (var i = 0; i < nums.length; i++) {
    var tmp = 0;
    for (var j = 0; j <= i; j++) {
      tmp += nums[j]; // sum for index 0 ~ i
    }
    ret[i] = tmp;
  }
  return ret;
};
