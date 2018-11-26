// Print all numbers between -10 and 19
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19")
for (var num = -10; num <= 19; num++ ) {
    console.log(num);
}

// Print all even numbers between 10 and 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40")
for (var num = 10; num <= 40; num++ ) {
    if ( num %2 == 0){
        console.log(num);
    }
}

// Print all odd numbers between 300 and 333
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")
for (var num = 300; num <= 333; num++ ) {
    if ( num %2 == 1){
        console.log(num);
    }
}

// Print all numbers divisible by both 3 and 5 between 5 and 50
console.log("PRINT ALL NUMBERS DIVISIBLE BY BOTH 3 AND 5 BETWEEN 5 AND 50")
for (var num = 5; num <= 50; num++ ) {
    if ( num % 5 == 0 && num % 3 == 0 ){
        console.log(num);
    }
}
