// Print all numbers between -10 and 19
var num = -10;
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19")
while (num < 20) {
    console.log(num);
    num++;
}

// Reset num
num = 10;

// Print all even numbers between 10 and 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40")
while (num <= 40) {
    console.log(num);
    num+= 2;
}

// Reset num
num = 300;

// Print all even numbers between 10 and 40
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
while (num <= 333) {
    if (num % 2 == 1) {
        console.log(num);
    }
    num+= 1;
}

// Reset num
num = 5;

// Print all numbers divisable by 5 and 3 between 5 and 50
console.log("PRINT ALL NUMBERS DIVISABLE BY 5 AND 3 BETWEEN 5 AND 50");
while (num <= 50) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num);
    }/* 
    if (num % 5 === 0) {
        console.log(num);
    } */
    num++;
}