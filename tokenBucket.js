
function tokenBucket(x, y) {
  var rate = x; // unit: messages
  var per  = y; // unit: seconds
  var allowance = rate; // unit: messages
  var lastTime = new Date(); // floating-point, e.g. usec accuracy. Unit: seconds

  while (var msg = recv()) {
    var currentTime = new Date();
    var timeElapsed = (currentTime - lastTime) / 1000;
    var lastTime = currentTime;
    allowance += timeElapsed * (rate / per);
    if (allowance > rate) {
      allowance = rate; // throttle
  }
    if (allowance < 1.0) {
      discard(msg);
    } else {
      forward(msg);
      allowance -= 1.0;
  } 
}

var x = 5, y = 4;

var result = tokenBucket(x, y);
console.log("result = " + result);