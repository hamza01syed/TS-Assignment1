let string1 = "hello";
let string2 = "world";
let string3 = "HELLO";

// Test 1: Check if string1 is equal to string2
console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2);

// Test 2: Check if string1 is not equal to string2
console.log("Is string1 != string2? I predict True.");
console.log(string1 != string2);

// Test 3: Check if string1 is equal to string3 (case insensitive)
console.log("Is string1 == string3 (case insensitive)? I predict True.");
console.log(string1.toLowerCase() == string3.toLowerCase());

let number1 = 10;
let number2 = 5;

// Test 4: Check if number1 is greater than number2
console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2);

// Test 5: Check if number1 is less than number2
console.log("Is number1 < number2? I predict False.");
console.log(number1 < number2);

// Test 6: Check if number1 is greater than or equal to number2
console.log("Is number1 >= number2? I predict True.");
console.log(number1 >= number2);

// Test 7: Check if number1 is less than or equal to number2
console.log("Is number1 <= number2? I predict False.");
console.log(number1 <= number2);

// Test 8: Check if number1 is equal to number2 multiplied by 2
console.log("Is number1 == number2 * 2? I predict True.");
console.log(number1 == number2 * 2);

let boolean1 = true;
let boolean2 = false;

// Test 9: Check if boolean1 is true and boolean2 is false
console.log("Is boolean1 && boolean2? I predict False.");
console.log(boolean1 && boolean2);

// Test 10: Check if boolean1 is true or boolean2 is true
console.log("Is boolean1 || boolean2? I predict True.");
console.log(boolean1 || boolean2);

let fruits = ["apple", "banana", "orange"];

// Test 11: Check if "apple" is in the array fruits
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes("apple"));

// Test 12: Check if "grape" is not in the array fruits
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes("grape"));
