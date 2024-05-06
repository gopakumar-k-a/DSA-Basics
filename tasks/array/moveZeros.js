// Move Zeroes:
// Given an array nums, move all 0's to the end of it
//  while maintaining the relative order of the non-zero elements.



let moveZero = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 1)
            arr.push(0)
        }
    }
    return arr
}
let nums = [0, 3, 5, 0, 7, 4]
let nums1 = [0,4,7,5,3,0,5,4]
console.log(moveZero(nums));
console.log(moveZero(nums1));


