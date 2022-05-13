
import { largeNumber, cut3 } from './utilities/util1.js';
import { sum, concat } from './utilities/util2.js';

let nums = [3, 2, 10, -1]
let nums2 = [1, 3, 3, 4]

console.log("The largeNumber function using the call method" + "\n" + largeNumber.call(this, nums))
console.log("The cut3 function" + "\n" + cut3(nums))

console.log("The sum function using the call method" + "\n" + sum.call(this, nums2))
console.log("The concat function" + "\n" + concat(nums, nums2))







