//  printReverse()
//  Write a function that takes an array as an argument and prints out the elements in the array in reverse order
function printReverse(myData) {
    var count = myData.length;
    while (count > 0) {
        count--;
        console.log(myData[count]);
    }
}

//  isUniform()
//  Write a function that takes an array as an argument and returns true if all elements in the array are identical
function isUniform(myData) {
    var count = 0;
    var first = myData[0];
    var returnValue = false;
    while (myData[count] === first) {
        count++;
        if (count == myData.length) {
            returnValue = true
        }
    }
    return returnValue;
}

//  sumArray()
//  Write a function that takes an array as an argument and returns the sum of all numbers in the aray
function sumArray(myData) {
    var sum = 0;
    myData.forEach( function(number){
        sum = sum + number;
    });
    return sum;
}

//  max()
//  Write a function max() that accepts an array of numbers and returns the maximum number in the array
function isLargest(myData) {
    var largest = 0;
    myData.forEach( function(number){
        if (number >= largest) {
            largest = number;
        }
    });
    console.log(largest);
}

//  Call printReverse
printReverse([1,2,3,4,5,6,7,8,9]);

//  Call isUniform
console.log(isUniform(["a","b","c","d","e"]));
console.log(isUniform([1,1,1,1,1,1]));
console.log(isUniform([1,1,1,1,1,2]));
console.log(isUniform(["a","a","a","a"]));

//  Call sumArray
console.log(sumArray([1,2,3]));
console.log(sumArray([151,285,331]));

//Call max
isLargest([3,6,87,96,3,6,4,54,34,21,23]);
isLargest([1,2,56,7,8,45,342,4,566,7,2]);
isLargest([6,63,6,78,874535,4,3435,234]);
isLargest([234,25374,46,5234243,23445,234]);