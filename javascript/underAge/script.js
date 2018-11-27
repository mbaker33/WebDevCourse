var age = prompt("What is your age?");

if(age < 0) {
    console.log("Please enter a new age.  It is impossible to be " + age + " years old.");
}


else if (age == 21) {
    console.log("Happy Birthday!  Come to the bar and get a free shot!")
}



else if (age %2 !== 0) {
    console.log ("Your age is odd.");
}

else if ( age % Math.sqrt(age) === 0 ) {
    console.log ("Perfect square!");
}