// ==========================================
// CHAPTER 12 - 13: FIXED & CLEAN OUTPUT
// ==========================================

// --- Question 1 ---
document.write("<h3>Question 1: Character Check</h3>");
var char = prompt("Enter any single character (number, letter, or symbol):");
if (char) {
    var ascii = char.charCodeAt(0);
    if (ascii >= 48 && ascii <= 57) {
        document.write("The given character '" + char + "' is a Number.");
    } 
    else if (ascii >= 65 && ascii <= 90) {
        document.write("The given character '" + char + "' is an Uppercase Letter.");
    } 
    else if (ascii >= 97 && ascii <= 122) {
        document.write("The given character '" + char + "' is a Lowercase Letter.");
    } 
    else {
        document.write("The given character is a Special Symbol.");
    }
}
document.write("<br><hr>"); // Line break aur separator line

// --- Question 2 ---
document.write("<h3>Question 2: Max Integer</h3>");
var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");
if (num1 > num2) {
    document.write("The larger number is: " + num1);
} 
else if (num2 > num1) {
    document.write("The larger number is: " + num2);
} 
else {
    document.write("Both numbers are equal.");
}
document.write("<br><hr>");

// --- Question 3 ---
document.write("<h3>Question 3: Number State Check</h3>");
var number = +prompt("Enter a number to check state:");
if (number > 0) {
    document.write("The number is Positive.");
} 
else if (number < 0) {
    document.write("The number is Negative.");
} 
else {
    document.write("The number is Zero.");
}
document.write("<br><hr>");

// --- Question 4 ---
document.write("<h3>Question 4: Vowel Checker</h3>");
var charInput = prompt("Enter a single character to check for Vowel:");
if (charInput) {
    charInput = charInput.toLowerCase();
    if (charInput === 'a' || charInput === 'e' || charInput === 'i' || charInput === 'o' || charInput === 'u') {
        document.write("True! It is a vowel.");
    } 
    else {
        document.write("False! It is not a vowel.");
    }
}
document.write("<br><hr>");

// --- Question 5 ---
document.write("<h3>Question 5: Password Validation</h3>");
var correctPassword = "smitPassword123";
var userPassword = prompt("Please enter your password:");
if (userPassword === "" || userPassword === null) {
    document.write("Please enter your password");
} 
else if (userPassword === correctPassword) {
    document.write("Correct! The password you entered matches the original password");
} 
else {
    document.write("Incorrect password");
}
document.write("<br><hr>");

// --- Question 6 ---
document.write("<h3>Question 6: Fixed Greeting Code</h3>");
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} 
else {
    greeting = "Good evening";
}
document.write(greeting);
document.write("<br><hr>");

// --- Question 7 ---
document.write("<h3>Question 7: 24-Hour Clock</h3>");
var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");
// FIX: 0000 ki jagah simple 0 use kiya hai syntax error se bachne ke liye
if (time >= 0 && time < 1200) {
    document.write("Good morning");
} 
else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon");
} 
else if (time >= 1700 && time < 2100) {
    document.write("Good evening");
} 
else if (time >= 2100 && time <= 2359) {
    document.write("Good night");
} 
else {
    document.write("Invalid time format entered.");
}
document.write("<br><br>");
