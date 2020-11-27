//an array of number that we want to get//
var nums = [4, 10, 22, -30, 55];
//work out the sum of the numbers in array//
var totalSum = 0;
for (var i in nums) {
    totalSum += nums[i];

}
//work out how many numbers are in the array//
var numsCnt = nums.length;

//calculate the average//
var average = totalSum / numsCnt;
//print out the answer//
console.log('Average is: ' + average)

var num1 = [68, 7, -22, 9, 100];
 
var avgSum = 0;
 for (var k in num1) {
     avgSum += num1[k];

 }

 var num1Cnt = num1.length;
 var final_answer = avgSum / num1Cnt;

 console.log('Average is: ' + final_answer)