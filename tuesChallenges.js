// Challenge 1(if/else):

// Create a variable called password.
// Check how many letters are in the password, if there
// are less than 8 log to the console that the password
// is too short. Otherwise log the password to the
// console.

// let password = 'catsndogs123';
// if (password.length <= 7) {
//   console.log(password);
// } else {
//   console.log('password is too short!');
// }

// Challenge 2(use both if/else and switch):

// Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it is log
// “This number is divisible by 3 or 5” to the console.
// Otherwise log “This number is not divisible by 3 or 5”.

// let num = 15;

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log('This number is divisible by 3 or 5');
// } else {
//   console.log('This number is not divisible by 3 or 5');
// }

// Challenge 3:

// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s
// divisible by 5 log “buzz” to the console, if it’s divisible
// by both 3 and 5 log “fizz buzz” to the console.
// Otherwise log num to the console.

// num = 15;

// if (num % 3 === 0) {
//   console.log('FIZZ');
// } else if (num % 5 === 0) {
//   console.log('BUZZ');
// } else if (num % 3 === 0 && num % 5 === 0) {
//   console.log('FIZZBUZZ');
// } else console.log(num);

// Challenge 4:

// Create a variable called num.
// Check if the number is a palindrome (looks the same
// forward as it does backwards e.g. 1001 or 20202).

// function isPalindrome(int) {
//   let num = int.toString().split('');
//   let reversed = num.reverse().join('');
//   return int == reversed;
// }

// console.log(isPalindrome(1221));

// Challenge 5:

// Create a variable called time, a variable called
// placeOfWork and a variable called townOfHome.
// Create an if statement that logs to the console
// where someone is at times of the day. E.g. if the time
// is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// time = 9;
// placeOfWork = 'Manchester';
// townOfHome = 'Baguley';

// if (time <= 7) {
//   console.log(`I am at home in ${townOfHome}`);
// } else if ((time = 8)) {
//   console.log(`I am commuting to ${placeOfWork}`);
// } else if (time >= 9) {
//   console.log(`I'm at work`);
// }

// Challenge 6:

// Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
// Find the index of a last vowel in the string.

// const string =
//   'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';

// const vowel = [a, e, i, o, u];

// console.log(
//   `The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
//     searchTerm
//   )}`
// );
