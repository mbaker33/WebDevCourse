//  isEven Function
//  Write a function isEven() which takes a single numeric argument
//  and returns true if the number is even, and false otherwise.

function isEven(number) {
    return number % 2 === 0;
}




//  factorial Function
//  Write a function factorial() which takes a single numeric argument
//  and returns the factorial of that number
//  i.e. factorial 4 is 4x3x2x1

function factorial(number) {
    var count = number;
    var returnvalue = 1;

    while (count > 0) {
        var returnvalue = returnvalue * count;
        count--
    }
    return returnvalue;
}






//  kebabToSnake Function
//  Write a function kebabToSnake() which takes a single kebab-cased
//  string argument and returns the snake-cased version

function kebabToSnake(string) {
    return string.replace (/-/g,'_');
}

console.log("");
console.log("isEven FUNCTION")
console.log(isEven(4));
console.log(isEven(9));
console.log(isEven(76));
console.log(isEven(49));
console.log(isEven("bagle"));
console.log("");
console.log("factorial FUNCTION")
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(10));
console.log(factorial(13));
console.log("");
console.log("kebabToSnake FUNCTION")
console.log(kebabToSnake("test-case"));
console.log(kebabToSnake("words-words-words"));
console.log(kebabToSnake("things-to-do"));
console.log(kebabToSnake("I-have-no-idea-what-to-write-here"));
console.log(kebabToSnake("completely-lost-now"));
